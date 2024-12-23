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
        const shortestLength = getDFSLength(
            findShortestOptimalSequence2(code),
            0,
            25
        );

        const numericCodePart = Number(code.replaceAll("A", ""));

        result += numericCodePart * shortestLength;
    }

    return result;
}

// Uses findShortestPaths instead of the optimal versions
export function getDFSLength2(
    code: string,
    currentDepth: number = 0,
    maxDepth: number,
    sequenceMemo: { [subsequence: string]: string } = {},
    lengthMemo: { [subsequence: string]: { [depth: number]: number } } = {}
): number {
    if (currentDepth === maxDepth) return code.length;

    let length = 0;
    let pointer = 0;

    while (pointer < code.length - 1) {
        let subcode = "";

        while (code[pointer] !== "A") {
            subcode += code[pointer];
            pointer++;
        }

        subcode += "A";

        const subsequence =
            sequenceMemo[subcode] ||
            findShortest(findOptimalSequences(subcode));

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
            sequenceMemo[subcode] || findShortestOptimalSequence2(subcode);

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
                start === end ? [""] : findShortestPaths(start, end);

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
                start === end ? [""] : findShortestPaths(start, end);

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

// console.log(
//     "AYA: findShortestSequences 1",
//     findShortestSequences("^^^<A").map((s) => [
//         s,
//         findShortestSequences(s)[0],
//         findLowestProximity(findShortestSequences(s)),
//         findShortestSequences(s)[0].length,
//         findShortestSequences(findShortestSequences(s)[0])[0],
//         findShortestSequences(findShortestSequences(s)[0])[0].length,
//         // findShortestSequences(
//         //     findShortestSequences(findShortestSequences(s)[0])[0]
//         // )[0],
//         // findShortestSequences(
//         //     findShortestSequences(findShortestSequences(s)[0])[0]
//         // )[0].length,
//     ])
// );

// console.log(
//     "AYA: findShortestSequences 1",
//     findShortestSequences("<^^^A").map((s) => [
//         s,
//         findShortestSequences(s)[0],
//         findLowestProximity(findShortestSequences(s)),
//         findShortestSequences(s)[0].length,
//         findShortestSequences(findShortestSequences(s)[0])[0],
//         findShortestSequences(findShortestSequences(s)[0])[0].length,
//         // findShortestSequences(
//         //     findShortestSequences(findShortestSequences(s)[0])[0]
//         // )[0],
//         // findShortestSequences(
//         //     findShortestSequences(findShortestSequences(s)[0])[0]
//         // )[0].length,
//     ])
// );

function generateOptimalDirectionSequencesMap(code: string) {
    const numberKeys = NUMBER_PAD.flat().filter(Boolean) as string[];
    const directionalKeys = DIRECTION_PAD.flat().filter(Boolean) as string[];
    const allShortestSequences: { [path: string]: true } = {};

    for (const start of directionalKeys) {
        for (const end of directionalKeys) {
            const paths = findShortestPaths(start, end).map((s) => s + "A");

            for (const path of paths) {
                allShortestSequences[path] = true;
            }
        }
    }

    for (const start of numberKeys) {
        for (const end of numberKeys) {
            const paths = findShortestPaths(start, end).map((s) => s + "A");

            for (const path of paths) {
                allShortestSequences[path] = true;
            }
        }
    }

    const queue = Object.keys(allShortestSequences).sort(
        (a, b) => a.length - b.length
    );

    const optimalSequences: { [path: string]: string } = {};

    while (queue.length > 0) {
        const path = queue.shift()!;
        const candidates = findShortestSequences(path);

        if (candidates.length === 1) {
            optimalSequences[path] = candidates[0];
        } else {
            let bestCandidate = candidates[0];
            console.log(
                "AYA: bestCandidate",
                path,
                candidates.map((candidate) => [
                    findShortestSequences(candidate).length,
                ])
            );
            // let bestCandidateFutureLength = findShortest(
            //     findShortestSequences(candidates[0])
            //         .map(findShortestSequences)
            //         .flat()
            // ).length;
            let noBestCandidate = false;

            // for (const nextCandidate of candidates.slice(1)) {
            //     const nextCandidateFutureLength = findShortest(
            //         findShortestSequences(nextCandidate)
            //             .map(findShortestSequences)
            //             .flat()
            //     ).length;

            //     if (nextCandidateFutureLength === bestCandidateFutureLength) {
            //         noBestCandidate = true;
            //         break;
            //     }

            //     if (nextCandidateFutureLength < bestCandidateFutureLength) {
            //         bestCandidate = nextCandidate;
            //         bestCandidateFutureLength = nextCandidateFutureLength;
            //     }
            // }

            // if (noBestCandidate) {
            //     const eek = (s: string) => {
            //         let result = "";
            //         let i = 0;
            //         let j = 0;

            //         while (i < s.length) {
            //             while (s[j] !== "A") {
            //                 j++;
            //             }

            //             j++;

            //             const subseqeunce = s.slice(i, j);
            //             const nextSubsequence = optimalSequences[subseqeunce];

            //             if (!nextSubsequence) {
            //                 return;
            //             }

            //             result += nextSubsequence;
            //             i = j;
            //         }

            //         return result;
            //     };

            //     console.log("AYA: noBest", candidates, candidates.map(eek));
            // }

            if (noBestCandidate) {
                queue.push(path);
            }
        }

        // console.log("AYA: optimalSequences", optimalSequences);
        // console.log("AYA: queue", queue);
    }

    console.log("AYA: optimalSequences", optimalSequences);
    console.log("AYA: queue", queue);

    // console.log("AYA: findShortestPaths", allShortestSequences);
}

function calculateSequenceProximity(sequence: string) {
    const prefixedSequence = "A" + sequence;

    let score = 0;

    for (let i = 0; i < prefixedSequence.length - 1; i++) {
        const a = findPosition(DIRECTION_PAD, prefixedSequence[i]);
        const b = findPosition(DIRECTION_PAD, prefixedSequence[i + 1]);

        score += Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    }

    return score;
}

function findLowestProximity(sequences: string[]): string[] {
    const min = Math.min(...sequences.map(calculateSequenceProximity));
    const result = sequences.filter(
        (s) => calculateSequenceProximity(s) === min
    );

    if (!result) throw Error("No result found");

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
                return (
                    lengthMemo[nextSubsequence]?.[depth] ??
                    dfs(
                        nextSubsequence,
                        depth + 1,
                        maxDepth,
                        sequenceMemo,
                        lengthMemo
                    )
                );
            }
        );

        length += Math.min(...nextSubsequenceLengths);
        i = j;
    }

    return length;
}
