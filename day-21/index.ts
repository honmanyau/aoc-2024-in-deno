export type Input = string[];
export type Position = [number, number];

export const NUMBER_PAD = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    [undefined, "0", "A"],
] as const;

export const DIRECTION_PAD = [
    [undefined, "^", "A"],
    ["<", "v", ">"],
] as const;

export const NUMBER_PAD_SEQUENCE_MAP = generateNumberPadPathsMap();

export async function solveDay21Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-21/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay21Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-21/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines;
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}

export function findShortestPaths(
    pad: typeof NUMBER_PAD | typeof DIRECTION_PAD,
    start: string,
    end: string
): string[] {
    const startPosition = findPosition(pad, start);
    const endPosition = findPosition(pad, end);

    const dy =
        (endPosition[0] - startPosition[0]) /
        Math.abs(endPosition[0] - startPosition[0]);

    const dx =
        (endPosition[1] - startPosition[1]) /
        Math.abs(endPosition[1] - startPosition[1]);

    const queue: [Position, string][] = [[[...startPosition], ""]];
    const result: string[] = [];

    while (queue.length > 0) {
        const batch = queue.splice(0);

        for (const [[y, x], sequence] of batch) {
            if (y === endPosition[0] && x === endPosition[1]) {
                result.push(sequence);
                continue;
            }

            if (y !== endPosition[0]) {
                const nextY = y + dy;

                if (pad[nextY][x] !== undefined) {
                    queue.push([[nextY, x], sequence + (dy > 0 ? "v" : "^")]);
                }
            }

            if (x !== endPosition[1]) {
                const nextX = x + dx;

                if (pad[y][nextX] !== undefined) {
                    queue.push([[y, nextX], sequence + (dx > 0 ? ">" : "<")]);
                }
            }
        }
    }

    return result;
}

function findPosition(
    pad: typeof NUMBER_PAD | typeof DIRECTION_PAD,
    button: string
): Position {
    for (let y = 0; y < pad.length; y++) {
        const index = pad[y].findIndex((v) => v === button);

        if (index !== -1) {
            return [y, index];
        }
    }

    throw new Error("Button not found!");
}

export function generateNumberPadPathsMap(): {
    [start: string]: {
        [end: string]: string[];
    };
} {
    const keys = [...NUMBER_PAD.flat()].filter(Boolean) as string[];
    const sequenceMap: { [start: string]: { [end: string]: string[] } } = {};

    for (const start of keys) {
        for (const end of keys) {
            if (start === end) continue;

            const sequences = findShortestPaths(NUMBER_PAD, start, end);

            sequenceMap[start] ||= {};
            sequenceMap[start][end] = sequences;
        }
    }

    return sequenceMap;
}
