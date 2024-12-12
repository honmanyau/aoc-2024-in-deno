type Input = string[];
type Region = [string, number, number];
type Position = [number, number];

export async function solveDay12Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-12/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay12Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-12/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);

    return content.trim().split("\n");
}

export function findRegions(input: Input): Region[] {
    return [];
}

export function findRegion(input: Input, startingPosition: Position): Region[] {
    return [];
}
