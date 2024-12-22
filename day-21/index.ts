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
export const DIRECTION_PAD_SEQUENCE_MAP = generateDirectionPadPathsMap();
export const DIRECTION_FINAL_SEQUENCE_MAP =
    generateSecondRobotDirectionsToShortestFinalSequenceMap();

export async function solveDay21Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-21/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
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
    let result = 0;

    for (const code of input) {
        const shortestLength = getDFSLength(
            findShortestOptimalSequence2(code),
            0,
            2
        );

        const numericCodePart = Number(code.replaceAll("A", ""));

        result += numericCodePart * shortestLength;
    }

    return result;
}

export function solvePart2(input: Input): number {
    return -1;
}

export function findOptimalPath(start: string, end: string): string {
    const inputsContainNumbers = !!start.match(/[0-9]/) || !!end.match(/[0-9]/);
    const pad = inputsContainNumbers ? NUMBER_PAD : DIRECTION_PAD;
    const startPosition = findPosition(pad, start);
    const endPosition = findPosition(pad, end);
    const dy = Math.sign(endPosition[0] - startPosition[0]);
    const dx = Math.sign(endPosition[1] - startPosition[1]);

    let path = "";

    if (dy === 0) {
        for (let i = startPosition[1]; i !== endPosition[1]; i += dx) {
            path += dx > 0 ? ">" : "<";
        }
    } else if (
        (dy < 0 && inputsContainNumbers) ||
        (dy > 0 && !inputsContainNumbers)
    ) {
        for (let i = startPosition[0]; i !== endPosition[0]; i += dy) {
            path += dy > 0 ? "v" : "^";
        }

        for (let i = startPosition[1]; i !== endPosition[1]; i += dx) {
            path += dx > 0 ? ">" : "<";
        }
    } else if (
        (dy > 0 && inputsContainNumbers) ||
        (dy < 0 && !inputsContainNumbers)
    ) {
        for (let i = startPosition[1]; i !== endPosition[1]; i += dx) {
            path += dx > 0 ? ">" : "<";
        }

        for (let i = startPosition[0]; i !== endPosition[0]; i += dy) {
            path += dy > 0 ? "v" : "^";
        }
    }

    return path;
}

export function findOptimalSequence(code: string): string {
    let sequence = findOptimalPath("A", code[0]) + "A";

    for (let i = 0; i < code.length - 1; i++) {
        sequence += findOptimalPath(code[i], code[i + 1]) + "A";
    }

    return sequence;
}

export function findOptimalPaths(start: string, end: string): string[] {
    const inputsContainNumbers = !!start.match(/[0-9]/) || !!end.match(/[0-9]/);
    const pad = inputsContainNumbers ? NUMBER_PAD : DIRECTION_PAD;
    const startPosition = findPosition(pad, start);
    const endPosition = findPosition(pad, end);
    const dy = Math.sign(endPosition[0] - startPosition[0]);
    const dx = Math.sign(endPosition[1] - startPosition[1]);

    let verticalPath = "";
    let horizontalPath = "";

    for (let i = startPosition[0]; i !== endPosition[0]; i += dy) {
        verticalPath += dy > 0 ? "v" : "^";
    }

    for (let i = startPosition[1]; i !== endPosition[1]; i += dx) {
        horizontalPath += dx > 0 ? ">" : "<";
    }

    const paths = [];

    if (pad[startPosition[0]]?.[endPosition[1]] !== undefined) {
        paths.push(horizontalPath + verticalPath);
    }

    if (
        pad[endPosition[0]]?.[startPosition[1]] !== undefined &&
        verticalPath + horizontalPath !== horizontalPath + verticalPath
    ) {
        paths.push(verticalPath + horizontalPath);
    }

    return paths;
}

export function findOptimalSequences(code: string): string[] {
    let sequences = findOptimalPaths("A", code[0]).map((s) => s + "A");

    for (let i = 0; i < code.length - 1; i++) {
        const subSequences = findOptimalPaths(code[i], code[i + 1]).map(
            (s) => s + "A"
        );

        const newSequences = [];

        for (const sequence of sequences) {
            for (const subSequence of subSequences) {
                newSequences.push(sequence + subSequence);
            }
        }

        sequences = newSequences;
    }

    return sequences;
}

export function findShortestOptimalSequence(
    code: string,
    noInit = false
): string {
    const memo: { [key: string]: string } = {};

    let sequence = noInit
        ? ""
        : findShortest(findOptimalPaths("A", code[0]).map((s) => s + "A"));

    for (let i = 0; i < code.length - 1; i++) {
        const subSequence =
            memo[`${code[i]}${code[i + 1]}`] ||
            findShortest(
                findOptimalPaths(code[i], code[i + 1]).map((s) => s + "A")
            );

        memo[`${code[i]}${code[i + 1]}`] ||= subSequence;

        sequence += subSequence;
    }

    return sequence;
}

export function findShortestOptimalSequence2(code: string): string {
    const memo: { [key: string]: string } = {};

    let sequence = "";

    for (let i = 0; i < code.length; i++) {
        let subcode = "";

        while (code[i] && code[i] !== "A") {
            subcode += code[i];
            i++;
        }

        if (code[i]) {
            subcode += code[i];
        }

        const subsequence =
            memo[subcode] || findShortestOptimalSequence(subcode);

        memo[subcode] ||= subsequence;
        sequence += subsequence;
    }

    return sequence;
}

export function getDFSLength(
    code: string,
    currentDepth: number = 0,
    maxDepth: number,
    sequenceMemo: { [subsequence: string]: string } = {},
    lengthMemo: { [subsequence: string]: { [depth: number]: number } } = {}
): number {
    if (currentDepth === maxDepth) return code.length;

    let length = 0;
    let pointer = 0;

    while (pointer < code.length) {
        let subcode = "";

        while (code[pointer] !== "A") {
            subcode += code[pointer];
            pointer++;
        }

        subcode += "A";

        const subsequence =
            sequenceMemo[subcode] || findShortestOptimalSequence(subcode);

        sequenceMemo[subcode] ||= subsequence;

        const subcodeLength =
            lengthMemo[subcode]?.[currentDepth] ??
            getDFSLength(
                subsequence,
                currentDepth + 1,
                maxDepth,
                sequenceMemo,
                lengthMemo
            );

        lengthMemo[subcode] ||= {};
        lengthMemo[subcode][currentDepth] ||= subcodeLength;

        length += subcodeLength;

        pointer++;
    }

    return length;
}

function findShortest(sequences: string[]): string {
    const min = Math.min(...sequences.map((s) => s.length));

    return sequences.filter((s) => s.length === min)[0];
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
            const sequences =
                start === end
                    ? [""]
                    : findShortestPaths(NUMBER_PAD, start, end);

            sequenceMap[start] ||= {};
            sequenceMap[start][end] = sequences;
        }
    }

    return sequenceMap;
}

export function generateDirectionPadPathsMap(): {
    [start: string]: {
        [end: string]: string[];
    };
} {
    const keys = [...DIRECTION_PAD.flat()].filter(Boolean) as string[];
    const sequenceMap: { [start: string]: { [end: string]: string[] } } = {};

    for (const start of keys) {
        for (const end of keys) {
            const sequences =
                start === end
                    ? [""]
                    : findShortestPaths(DIRECTION_PAD, start, end);

            sequenceMap[start] ||= {};
            sequenceMap[start][end] = sequences;
        }
    }

    return sequenceMap;
}

export function generateSecondRobotDirectionsToShortestFinalSequenceMap() {
    const keys = DIRECTION_PAD.flat().filter(Boolean) as string[];
    const sequenceMap: { [start: string]: { [end: string]: string[] } } = {};

    for (const start of keys) {
        for (const end of keys) {
            const thirdRobotSequences = DIRECTION_PAD_SEQUENCE_MAP[start][
                end
            ].map((s) => s + "A");

            for (const thirdRobotSequence of thirdRobotSequences) {
                let fourthRobotSequences = DIRECTION_PAD_SEQUENCE_MAP["A"][
                    thirdRobotSequence[0]
                ].map((s) => s + "A");

                for (let i = 0; i < thirdRobotSequence.length - 1; i++) {
                    const fourthRobotSubsequences =
                        DIRECTION_PAD_SEQUENCE_MAP[thirdRobotSequence[i]][
                            thirdRobotSequence[i + 1]
                        ];

                    fourthRobotSequences = getStringProduct(
                        fourthRobotSequences,
                        fourthRobotSubsequences
                    ).map((s) => s + "A");
                }

                sequenceMap[start] ||= {};
                sequenceMap[start][end] ||= [];
                sequenceMap[start][end].push(...fourthRobotSequences);
            }
        }
    }

    return sequenceMap;
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

export function generateSecondRobotSequences(code: string): string[] {
    let sequences: string[] = NUMBER_PAD_SEQUENCE_MAP["A"][code[0]].map(
        (v) => v + "A"
    );

    for (let i = 0; i < code.length - 1; i++) {
        const start = code[i];
        const end = code[i + 1];
        const subsequences =
            start === end ? [""] : NUMBER_PAD_SEQUENCE_MAP[start][end];

        const newSequences: string[] = [];

        for (const sequence of sequences) {
            for (const subsequence of subsequences) {
                newSequences.push(sequence + subsequence + "A");
            }
        }

        sequences = newSequences;
    }

    return sequences;
}

export function getShortestSequenceLength(code: string): number {
    const sequences = generateSecondRobotSequences(code).map((s) => "A" + s);

    const lengths = sequences.map((sequence) => {
        let length = 0;

        for (let i = 0; i < sequence.length - 1; i++) {
            const start = sequence[i];
            const end = sequence[i + 1];
            const subsequenceLengths = DIRECTION_FINAL_SEQUENCE_MAP[start][
                end
            ].map((v) => v.length);

            length += Math.min(...subsequenceLengths);
        }

        return length;
    });

    return Math.min(...lengths);
}
