import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import {
    findInterconnectedComputers,
    findLargestInterConnectedGroup,
    generateConnectionMap,
    readPuzzleInput,
    solvePart1,
    solvePart2,
} from "./index.ts";

describe("Day 23", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-23/sample-input-0.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                "ab-bc",
                "bc-cd",
                "ce-ed",
                "df-fo",
                "ab-cd",
            ]);
        });
    });

    describe("solvePart1()", () => {
        it("returns 7 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-23/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toEqual(7);
        });
    });

    describe("solvePart2()", () => {
        it("returns the correct password for the sample input", async () => {
            const path = `${Deno.cwd()}/day-23/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2(input);

            expect(result).toEqual(["co", "de", "ka", "ta"]);
        });
    });

    describe("generateConnectionMap()", () => {
        it("returns a map of all computer connections correctly", async () => {
            const path = `${Deno.cwd()}/day-23/sample-input-0.txt`;
            const input = await readPuzzleInput(path);
            const result = generateConnectionMap(input);

            expect(result).toEqual({
                ab: { bc: true, cd: true },
                bc: { ab: true, cd: true },
                cd: { ab: true, bc: true },
                ce: { ed: true },
                df: { fo: true },
                ed: { ce: true },
                fo: { df: true },
            });
        });
    });

    describe("findInterconnectedComputers()", () => {
        it("returns 12 sets of three interconnected computers", async () => {
            const path = `${Deno.cwd()}/day-23/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = findInterconnectedComputers(input);

            expect(result).toEqual([
                "aq,cg,yn",
                "aq,vc,wq",
                "co,de,ka",
                "co,de,ta",
                "co,ka,ta",
                "de,ka,ta",
                "kh,qp,ub",
                "qp,td,wh",
                "tb,vc,wq",
                "tc,td,wh",
                "td,wh,yn",
                "ub,vc,wq",
            ]);
        });
    });

    describe("findLargestInterConnectedGroup", () => {
        it("returns co, de, ka, ta when starting a search with any of those computers in the example input", async () => {
            const path = `${Deno.cwd()}/day-23/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = findLargestInterConnectedGroup(input, "co");
            const result2 = findLargestInterConnectedGroup(input, "de");
            const result3 = findLargestInterConnectedGroup(input, "ka");
            const result4 = findLargestInterConnectedGroup(input, "ta");

            expect(result).toEqual(["co", "de", "ka", "ta"]);
            expect(result2).toEqual(["co", "de", "ka", "ta"]);
            expect(result3).toEqual(["co", "de", "ka", "ta"]);
            expect(result4).toEqual(["co", "de", "ka", "ta"]);
        });
    });
});
