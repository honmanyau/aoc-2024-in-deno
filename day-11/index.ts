type Input = number[][];
type Position = [number, number];

const DIRECTIONS = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
] as const;

export async function solveDay11Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-11/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay11Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-11/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines.map((line) => line.split("").map(Number));
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}

function keyify(position: Position): string {
    return position.join(",");
}
