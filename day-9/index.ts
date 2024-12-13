type Input = string[];
type Position = [number, number];
type AntennaPositions = { [type: string]: Position[] };

export async function solveDay9Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-9/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay9Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-9/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart2(input);
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);

    return content.trim().split("\n");
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
