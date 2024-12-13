type Input = number[][];

export async function solveDay10Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-10/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay10Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-10/input.txt`;
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
