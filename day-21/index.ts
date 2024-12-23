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

export async function solveDay21Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-21/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay21Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-21/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart2(input);
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines;
}

export function solvePart1(input: Input): number {
    let result = 0;

    for (const code of input) {
        const shortestLength = dfs(code, 0, 3);

        const numericCodePart = Number(code.replaceAll("A", ""));

        result += numericCodePart * shortestLength;
    }

    return result;
}

export function solvePart2(input: Input): number {
    let result = 0;

    for (const code of input) {
        const shortestLength = dfs(code, 0, 26);
        const numericCodePart = Number(code.replaceAll("A", ""));

        result += numericCodePart * shortestLength;
    }

    return result;
}

export function findShortestPaths(start: string, end: string): string[] {
    if (start === end) return [""];

    const inputsContainNumbers = !!start.match(/[0-9]/) || !!end.match(/[0-9]/);
    const pad = inputsContainNumbers ? NUMBER_PAD : DIRECTION_PAD;
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

export function dfs(
    code: string,
    depth = 0,
    maxDepth = 2,
    sequenceMemo: { [sequence: string]: string } = {},
    lengthMemo: { [sequence: string]: { [depth: number]: number } } = {}
): number {
    if (depth === maxDepth) return code.length;

    let i = 0;
    let j = 0;
    let length = 0;

    while (i < code.length) {
        while (code[j] !== "A") j++;
        j++;

        const subsequence = code.slice(i, j);
        const nextSubsequences = findShortestSequences(subsequence);
        const nextSubsequenceLengths = nextSubsequences.map(
            (nextSubsequence) => {
                const nextSubsequenceLength =
                    lengthMemo[nextSubsequence]?.[depth] ??
                    dfs(
                        nextSubsequence,
                        depth + 1,
                        maxDepth,
                        sequenceMemo,
                        lengthMemo
                    );

                lengthMemo[nextSubsequence] ||= {};
                lengthMemo[nextSubsequence][depth] = nextSubsequenceLength;

                return nextSubsequenceLength;
            }
        );

        length += Math.min(...nextSubsequenceLengths);
        i = j;
    }

    return length;
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

function getStringProduct(a: string[], b: string[]): string[] {
    const products = [];

    for (const i of a) {
        for (const j of b) {
            products.push(i + j);
        }
    }

    return products;
}

function findShortestSequences(code: string) {
    if (!code.endsWith("A")) throw Error("Code must end with A");

    let sequences = findShortestPaths("A", code[0]).map((s) => s + "A");

    for (let i = 0; i < code.length - 1; i++) {
        sequences = getStringProduct(
            sequences,
            findShortestPaths(code[i], code[i + 1]).map((s) => s + "A")
        );
    }

    return sequences;
}
