export async function solveDay6Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-6/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay6Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-6/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<string[][]> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return [];
}
