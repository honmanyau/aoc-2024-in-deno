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

    const [startY, startX] = robotPosition;
    const [dy, dx] = vector;
    const closestSpace = findClosestValidSpace(map, robotPosition, vector);

    if (!closestSpace) return robotPosition;

    const queue: Position[] = [[startY, startX]];
    const movables: { [position: string]: string } = {};

    while (queue.length > 0) {
        const [y, x] = queue.shift()!;
        const tile = map[y][x];

        if (!tile || tile === "#") throw new Error("Unexpected tile found!");
        if (tile === "." || !!movables[keyify([y, x])]) continue;

        const nextY = y + dy;
        const nextX = x + dx;
        const nextTile = map[nextY]?.[nextX];

        if (!nextTile || nextTile === "#") return [startY, startX];

        if (tile === "[") {
            queue.push([y, x + 1]);
        } else if (tile === "]") {
            queue.push([y, x - 1]);
        }

        if (["O", "[", "]", "."].includes(nextTile)) {
            queue.push([nextY, nextX]);
        }

        movables[keyify([y, x])] = tile;
    }

    for (const [key, tile] of Object.entries(movables)) {
        const [y, x] = key.split(",").map(Number) as Position;
        const nextY = y + dy;
        const nextX = x + dx;

        map[nextY][nextX] = tile;

        if (!movables[keyify([y - dy, x - dx])]) {
            map[y][x] = ".";
        }
    }

    return [startY + dy, startX + dx];
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

function keyify(position: Position) {
    return `${position.join(",")}`;
}

function makePart2Map(map: InputMap): InputMap {
    return map.map((row) => {
        const newRow = [];

        for (const tile of row) {
            if (tile === "#") {
                newRow.push("#", "#");
            } else if (tile === "O") {
                newRow.push("[", "]");
            } else if (tile === ".") {
                newRow.push(".", ".");
            } else if (tile === "@") {
                newRow.push("@", ".");
            }
        }

        return newRow;
    });
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

export function solvePart2(input: Input): number {
    const [unprocessedMap, _, instructions] = input;
    const map = makePart2Map(unprocessedMap);

    let robotPosition: Position | undefined;

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[0].length; x++) {
            if (map[y][x] === "@") {
                robotPosition = [y, x];
            }
        }
    }

    if (!robotPosition) throw new Error("Robot not found!");

    for (const instruction of instructions) {
        robotPosition = step(map, robotPosition, instruction);
    }

    let result = 0;

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[0].length; x++) {
            if (map[y][x] === "O" || map[y][x] === "[") {
                result += 100 * y + x;
            }
        }
    }

    return result;
}
