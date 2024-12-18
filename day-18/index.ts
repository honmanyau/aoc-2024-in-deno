export type Input = [number, number][];
export type Grid = ("." | "#")[][];

export async function solveDay18Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-18/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay18Part2(): Promise<number> {
    const results = await solvePart2();

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines.map(
        (v) => v.split(",").map(Number).reverse() as [number, number]
    );
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(): number {
    return -1;
}

export function simulate(
    input: Input,
    steps: number,
    gridSize: number = 70
): Grid {
    return [];
}
