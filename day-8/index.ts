type Input = string[][];
type Position = [number, number];
type AntennaPositions = { [type: string]: Position[] };

export async function solveDay8Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-8/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay8Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-8/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart2(input);
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);

    return content
        .trim()
        .split("\n")
        .map((line) => line.split(""));
}

export function solvePart1(input: Input): number {
    let result = 0;

    return result;
}

export function solvePart2(input: Input): number {
    let result = 0;

    return result;
}

export function getAntennaPositions(input: Input): AntennaPositions {
    const antennaPositions: AntennaPositions = {};

    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[0].length; x++) {
            const tile = input[y][x];

            if (tile === ".") continue;

            if (!antennaPositions[tile]) {
                antennaPositions[tile] = [];
            }

            antennaPositions[tile].push([y, x] as Position);
        }
    }

    return antennaPositions;
}
