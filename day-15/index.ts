export type Map = string[][];
export type Input = [Map, string];
export type Position = [number, number];
export type Vector = [number, number];

export async function solveDay15Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-15/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay15Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-15/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const [protoMap, instructions] = content.trim().split("\n\n");

    return [protoMap.split("\n").map((line) => line.split("")), instructions];
}
