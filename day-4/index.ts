export async function solveDay4Part1(): Promise<number> {
    return -1;
}

export async function solveDay4Part2(): Promise<number> {
    return -1;
}

export async function readPuzzleInput(path: string): Promise<string[]> {
    const content = await Deno.readTextFile(path);

    return content.trim().split("\n");
}

export function findXmases(input: string[]): number {
    throw new Error("Not implemented");
}
