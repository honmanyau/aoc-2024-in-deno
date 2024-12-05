export async function solveDay5Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-5/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay5Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-5/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<string> {
    const content = await Deno.readTextFile(path);

    return content;
}
