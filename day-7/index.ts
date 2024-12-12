type Input = string[][];

export async function solveDay7Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-7/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay7Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-7/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);

    return content
        .trim()
        .split("\n")
        .map((line) => line.split(""));
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
