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

    return solvePart1(input);
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
    const branches = [startingPosition];
    const peakLocations: { [position: string]: true } = {};

    while (branches.length > 0) {
        const position = branches.shift();

        if (!position) throw new Error("Something went horribly wrong!");

        const [y, x] = position;
        const height = input[y][x];

        if (height === 9) {
            peakLocations[keyify(position)] = true;
        }

        const nextPositions = step(input, position);

        for (const [nextY, nextX] of nextPositions) {
            const nextHeight = input[nextY][nextX];

            if (nextHeight === height + 1) {
                branches.push([nextY, nextX]);
            }
        }
    }

    return Object.keys(peakLocations).length;
}

export function solvePart1(input: Input): number {
    let trailCount = 0;

    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[0].length; x++) {
            const height = input[y][x];

            if (height !== 0) continue;

            trailCount += findTrails(input, [y, x]);
        }
    }

    return trailCount;
}

export function solvePart2(input: Input): number {
    return -1;
}

function keyify(position: Position): string {
    return position.join(",");
}
