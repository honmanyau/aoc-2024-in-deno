export type Input = string[][];
export type Position = [number, number];
export type Vector = [number, number];
export type Visited = { [position: string]: { [direction: string]: number } };
export type ReindeerState = {
    position: Position;
    direction: Vector;
    score: number;
};

export const DIRECTIONS: { [key: string]: Vector } = {
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
    throw new Error("Not implemented");
}

function keyify(position: Position | Vector) {
    return `${position.join(",")}`;
}
