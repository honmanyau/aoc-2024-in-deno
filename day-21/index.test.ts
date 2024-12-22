import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import {
    findShortestOptimalSequence,
    findShortestOptimalSequence2,
    findShortestPaths,
    generateDirectionPadPathsMap,
    generateNumberPadPathsMap,
    generateSecondRobotSequences,
    getShortestSequenceLength,
    NUMBER_PAD,
    readPuzzleInput,
    solvePart1,
} from "./index.ts";

describe("Day 21", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-21/sample-input-0.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual(["042A", "123A", "999A", "101A", "024A"]);
        });
    });

    describe("solvePart1()", () => {
        it("returns for the sample input", async () => {
            const path = `${Deno.cwd()}/day-21/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(126384);
        });
    });

    describe("solvePart2()", () => {
        it("returns the state correctly for the sample input for part 2 with 6 picoseconds allowed", async () => {
            const path = `${Deno.cwd()}/day-21/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("findShortestPaths()", () => {
        it(`returns [["<"]] the number pad starting at A and ending at 0`, () => {
            const result = findShortestPaths(NUMBER_PAD, "A", "0");

            expect(result).toEqual([["<"].join("")]);
        });

        it(`returns [["<", "^"], ["<", "^"]] the number pad starting at A and ending at 0`, () => {
            const result = findShortestPaths(NUMBER_PAD, "A", "2");

            expect(result).toEqual([["^", "<"].join(""), ["<", "^"].join("")]);
        });

        it(`returns [["^"]] the number pad starting at A and ending at 0`, () => {
            const result = findShortestPaths(NUMBER_PAD, "A", "5");

            expect(result).toEqual([
                ["^", "^", "<"].join(""),
                ["^", "<", "^"].join(""),
                ["<", "^", "^"].join(""),
            ]);
        });

        it(`returns [] the number pad starting at 4 and ending at A`, () => {
            const result = findShortestPaths(NUMBER_PAD, "4", "A");

            expect(result).toEqual([
                ["v", ">", "v", ">"].join(""),
                ["v", ">", ">", "v"].join(""),
                [">", "v", "v", ">"].join(""),
                [">", "v", ">", "v"].join(""),
                [">", ">", "v", "v"].join(""),
            ]);
        });
    });

    describe("generateNumberPadPathsMap()", () => {
        it(`accessing the object returned with the keys "A" and "0" returns ["<"]`, async () => {
            const result = generateNumberPadPathsMap();

            expect(result["A"]["0"]).toEqual(["<"]);
        });

        it(`accessing the object returned with the keys "A" and "2" returns ["^<", "<^"]`, async () => {
            const result = generateNumberPadPathsMap();

            expect(result["A"]["2"]).toEqual(["^<", "<^"]);
        });

        it(`accessing the object returned with the keys "A" and "5" returns ["^^<", "^<^", "<^^"]`, async () => {
            const result = generateNumberPadPathsMap();

            expect(result["A"]["5"]).toEqual(["^^<", "^<^", "<^^"]);
        });
    });

    describe("generateDirectionPadPathsMap()", () => {
        it(`accessing the object returned with the keys "A" and "^" returns ["<"]`, () => {
            const result = generateDirectionPadPathsMap();

            expect(result["A"]["^"]).toEqual(["<"]);
        });

        it(`accessing the object returned with the keys "A" and "v" returns ["<"]`, () => {
            const result = generateDirectionPadPathsMap();

            expect(result["A"]["v"]).toEqual(["v<", "<v"]);
        });
    });

    describe("generateSecondRobotSequences()", () => {
        it(`returns the correct sequences for the code 029A`, () => {
            const result = generateSecondRobotSequences("029A");

            expect(result).toEqual([
                "<A^A^^>AvvvA",
                "<A^A^>^AvvvA",
                "<A^A>^^AvvvA",
            ]);
        });
    });

    describe("getShortestSequenceLength()", () => {
        it(`returns the correct sequences for the code 029A and subsequent sequences using directional keypads`, async () => {
            const result = getShortestSequenceLength("029A");
            const result2 = getShortestSequenceLength("980A");
            const result3 = getShortestSequenceLength("179A");
            const result4 = getShortestSequenceLength("456A");
            const result5 = getShortestSequenceLength("379A");

            expect(result).toBe(68);
            expect(result2).toBe(60);
            expect(result3).toBe(68);
            expect(result4).toBe(64);
            expect(result5).toBe(64);
        });
    });

    describe("findShortestOptimalSequence()", () => {
        it(`returns the correct sequences for the code 029A and subsequent sequences using directional keypads`, async () => {
            const generateFinalSeqeunce = (code: string) => {
                let s = findShortestOptimalSequence(code);

                for (let i = 0; i < 2; i++) {
                    s = findShortestOptimalSequence(s);
                }

                return s;
            };

            const result = generateFinalSeqeunce("029A").length;
            const result2 = generateFinalSeqeunce("980A").length;
            const result3 = generateFinalSeqeunce("179A").length;
            const result4 = generateFinalSeqeunce("456A").length;
            const result5 = generateFinalSeqeunce("379A").length;

            expect(result).toBe(68);
            expect(result2).toBe(60);
            expect(result3).toBe(68);
            expect(result4).toBe(64);
            expect(result5).toBe(64);
        });
    });

    describe("findShortestOptimalSequence2()", () => {
        it(`returns the correct sequences for the code 029A and subsequent sequences using directional keypads`, async () => {
            const generateFinalSeqeunce = (code: string) => {
                let s = findShortestOptimalSequence2(code);

                for (let i = 0; i < 2; i++) {
                    s = findShortestOptimalSequence2(s);
                }

                return s;
            };

            const result = generateFinalSeqeunce("029A").length;
            const result2 = generateFinalSeqeunce("980A").length;
            const result3 = generateFinalSeqeunce("179A").length;
            const result4 = generateFinalSeqeunce("456A").length;
            const result5 = generateFinalSeqeunce("379A").length;

            expect(result).toBe(68);
            expect(result2).toBe(60);
            expect(result3).toBe(68);
            expect(result4).toBe(64);
            expect(result5).toBe(64);
        });
    });
});
