export type Input = string[][];
export type Position = [number, number];
export type Vector = [number, number];
export type Visited = { [position: string]: { [direction: string]: number } };
export type ReindeerState = {
    position: Position;
    direction: Vector;
    score: number;
};

export const DIRECTION: { [key: string]: Vector } = {
    UP: [-1, 0],
    RIGHT: [0, 1],
    DOWN: [1, 0],
    LEFT: [0, -1],
};

export async function solveDay16Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-16/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay16Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-16/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.split("\n");

    return lines.map((line) => line.split(""));
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}

export function step(
    input: Input,
    { position, direction, score }: ReindeerState
): ReindeerState[] | undefined {
    const [startY, startX] = position;
    const [dy, dx] = direction;
    const nextY = startY + dy;
    const nextX = startX + dx;
    const nextTile = input[nextY]?.[nextX];

    if (nextTile === undefined) {
        throw new Error("Invalid logic!");
    }

    // Walking into a wall terminates a path.
    if (nextTile === "#") return undefined;
    if (nextTile === "E") return [];

    return [
        {
            position: [nextY, nextX],
            direction,
            score: score + 1,
        },
        {
            position: [nextY, nextX],
            direction: getLeftTurnDirection(direction),
            score: score + 1001,
        },
        {
            position: [nextY, nextX],
            direction: getRightTurnDirection(direction),
            score: score + 1001,
        },
    ];
}

function getLeftTurnDirection([y, x]: Vector): Vector {
    if (y === 0) {
        return x === 1 ? DIRECTION.UP : DIRECTION.DOWN;
    }

    return y === 1 ? DIRECTION.RIGHT : DIRECTION.LEFT;
}

function getRightTurnDirection([y, x]: Vector): Vector {
    if (y === 0) {
        return x === 1 ? DIRECTION.DOWN : DIRECTION.UP;
    }

    return y === 1 ? DIRECTION.LEFT : DIRECTION.RIGHT;
}

function keyify(position: Position | Vector) {
    return `${position.join(",")}`;
}
