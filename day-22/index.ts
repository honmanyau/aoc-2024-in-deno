export type Input = number[];

export async function solveDay22Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-22/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay22Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-22/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart2(input);
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n").map(Number);

    return lines;
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
