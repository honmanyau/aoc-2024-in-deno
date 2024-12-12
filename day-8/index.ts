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
    const antennaPositions = getAntennaPositions(input);
    const antinodePositions = new Set<string>();

    const isOob = ([y, x]: Position) => input[y]?.[x] === undefined;

    for (const [_antennaType, positions] of Object.entries(antennaPositions)) {
        for (let i = 0; i < positions.length; i++) {
            for (let j = 0; j < positions.length; j++) {
                if (i === j) continue;

                const antennaPosition1 = positions[i];
                const antennaPosition2 = positions[j];

                const offset1: Position = [
                    antennaPosition1[0] - antennaPosition2[0],
                    antennaPosition1[1] - antennaPosition2[1],
                ];

                const offset2: Position = [
                    antennaPosition2[0] - antennaPosition1[0],
                    antennaPosition2[1] - antennaPosition1[1],
                ];

                const antinodePosition1: Position = [
                    antennaPosition1[0] + offset1[0],
                    antennaPosition1[1] + offset1[1],
                ];
                const antinodePosition2: Position = [
                    antennaPosition2[0] + offset2[0],
                    antennaPosition2[1] + offset2[1],
                ];

                if (!isOob(antinodePosition1)) {
                    antinodePositions.add(keyify(antinodePosition1));
                }

                if (!isOob(antinodePosition2)) {
                    antinodePositions.add(keyify(antinodePosition2));
                }
            }
        }
    }

    return antinodePositions.size;
}

export function solvePart2(input: Input): number {
    const antennaPositions = getAntennaPositions(input);
    const antinodePositions = new Set<string>();

    const isOob = ([y, x]: Position) => input[y]?.[x] === undefined;

    const add = (position: Position, offset: Position, m: number): Position =>
        [position[0] + offset[0] * m, position[1] + offset[1] * m] as Position;

    for (const [_antennaType, positions] of Object.entries(antennaPositions)) {
        for (let i = 0; i < positions.length; i++) {
            for (let j = 0; j < positions.length; j++) {
                if (i === j) continue;

                const antennaPosition1 = positions[i];
                const antennaPosition2 = positions[j];

                const offset1: Position = [
                    antennaPosition1[0] - antennaPosition2[0],
                    antennaPosition1[1] - antennaPosition2[1],
                ];

                const offset2: Position = [
                    antennaPosition2[0] - antennaPosition1[0],
                    antennaPosition2[1] - antennaPosition1[1],
                ];

                let n = 1;
                let antinodePosition = add(antennaPosition2, offset1, n);

                while (!isOob(antinodePosition)) {
                    antinodePositions.add(keyify(antinodePosition));
                    n++;
                    antinodePosition = add(antennaPosition2, offset1, n);
                }

                n = 1;
                antinodePosition = add(antennaPosition1, offset2, n);

                while (!isOob(antinodePosition)) {
                    antinodePositions.add(keyify(antinodePosition));
                    n++;
                    antinodePosition = add(antennaPosition1, offset2, n);
                }
            }
        }
    }

    return antinodePositions.size;
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

function keyify(position: Position): string {
    return position.join(",");
}
