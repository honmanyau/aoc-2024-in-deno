type Input = string[];

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

    return content.trim().split(" ");
}

export function blink(input: Input): Input {
    return [];
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
