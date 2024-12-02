export async function solveDay2Part1(): Promise<void> {
    return;
}

export async function solveDay2Part2(): Promise<void> {
    return;
}

export async function readPuzzleInput(path: string): Promise<number[][]> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines.map((line) => line.split(/\s+/).map(Number));
}
