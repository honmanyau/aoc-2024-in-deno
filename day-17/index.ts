export type Input = string[];

export async function solveDay17Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-17/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay17Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-17/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.split("\n");

    return lines;
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
