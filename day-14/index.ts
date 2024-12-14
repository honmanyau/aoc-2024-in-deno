type Input = [Position, Vector][];
type Position = [number, number];
type Vector = [number, number];

export async function solveDay14Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-14/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay14Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-14/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines.map((line) => {
        const match = line.match(/p=(.+) v=(.+)/);

        if (!match) throw new Error(`Invalid line parsing logic!`);

        const position = match[1].split(",").map(Number).reverse() as Position;
        const velocity = match[2].split(",").map(Number).reverse() as Vector;

        return [position, velocity];
    });
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
