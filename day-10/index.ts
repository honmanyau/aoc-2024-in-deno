type Input = number[][];
type Position = [number, number];

const DIRECTIONS = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
] as const;

export async function solveDay10Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-10/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay10Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-10/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines.map((line) => line.split("").map(Number));
}

export function step(input: Input, position: Position): Position[] {
    const nextPositions: Position[] = [];
    const currentHeight = input[position[0]][position[1]];

    for (const [dy, dx] of DIRECTIONS) {
        const adjacentHeight = input[position[0] + dy]?.[position[1] + dx];

        if (adjacentHeight === currentHeight + 1) {
            nextPositions.push([position[0] + dy, position[1] + dx]);
        }
    }

    return nextPositions;
}

export function findTrails(input: Input, startingPosition: Position): number {
    return -1;
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
