export type Input = [Colors, string[]];

export type Colors = { [color: string]: boolean };

export async function solveDay19Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-19/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay19Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-19/input.txt`;
    const input = await readPuzzleInput(path);
    const result = solvePart2(input);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const [colorStrings, towelStrings] = content.trim().split("\n\n");
    const colors: Colors = {};

    for (const color of colorStrings.replaceAll(/\s/g, "").split(",")) {
        colors[color] = true;
    }

    return [colors, towelStrings.trim().split("\n")];
}

export function buildTowel(colors: Colors, towel: string): string[][] {
    return [];
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
