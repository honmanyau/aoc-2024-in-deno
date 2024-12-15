export type InputMap = string[][];
export type Input = [InputMap, Position, string];
export type Position = [number, number];
export type Vector = [number, number];

const DIRECTIONS: { [instruction: string]: Vector } = {
    "^": [-1, 0],
    v: [1, 0],
    ">": [0, 1],
    "<": [0, -1],
};

export async function solveDay15Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-15/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay15Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-15/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export function step(
    map: InputMap,
    robotPosition: Position,
    instruction: string
): Position {
    const vector = DIRECTIONS[instruction];

    if (!vector) throw new Error("Invalid instruction: " + instruction);

    const [y, x] = robotPosition;
    const [dy, dx] = vector;
    const closestSpace = findClosestValidSpace(map, robotPosition, vector);

    if (!closestSpace) return robotPosition;

    const nextY = y + dy;
    const nextX = x + dx;
    const nextTile = map[nextY]?.[nextX];

    if (!nextTile) throw new Error("Unexpected OOB!");

    if (nextTile === "O") {
        map[nextY][nextX] = ".";
        map[closestSpace[0]][closestSpace[1]] = "O";
    }

    map[y][x] = ".";
    map[nextY][nextX] = "@";

    return [nextY, nextX];
}

function findClosestValidSpace(
    map: InputMap,
    robotPosition: Position,
    direction: Vector
): Position | undefined {
    const [dy, dx] = direction;
    let [y, x] = robotPosition;

    while (true) {
        const nextY = y + dy;
        const nextX = x + dx;
        const nextTile = map[nextY]?.[nextX];

        if (nextTile === "#") return;
        if (nextTile === undefined) return;
        if (nextTile === ".") return [nextY, nextX];

        y = nextY;
        x = nextX;
    }

    throw new Error("Invalid logic!");
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const [protoMap, instructions] = content.trim().split("\n\n");
    const map = protoMap.split("\n").map((line) => line.split(""));

    let robotPosition: Position | undefined = undefined;

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[0].length; x++) {
            if (map[y][x] === "@") {
                robotPosition = [y, x];
            }
        }
    }

    if (!robotPosition) throw new Error("Robot not found!");

    return [map, robotPosition, instructions.replace(/\s/g, "")];
}

export function solvePart1(input: Input): number {
    const [map, position, instructions] = input;

    let robotPosition = position;

    for (const instruction of instructions) {
        robotPosition = step(map, robotPosition, instruction);
    }

    let result = 0;

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[0].length; x++) {
            if (map[y][x] === "O") {
                result += 100 * y + x;
            }
        }
    }

    return result;
}
