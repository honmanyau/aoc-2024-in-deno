export type Input = string[];

export async function solveDay19Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-19/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay19Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-19/input.txt`;
    const input = await readPuzzleInput(path);
    const result = solvePart2(input);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines;
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
