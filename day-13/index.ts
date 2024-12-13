type Input = string;
type Blocks = string[];

export async function solveDay13Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-13/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay13Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-13/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart2(input);
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);

    return content.trim();
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
