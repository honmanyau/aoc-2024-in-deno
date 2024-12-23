import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { generateConnectionMap, readPuzzleInput } from "./index.ts";

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
        it("returns for the sample input", async () => {
            const path = `${Deno.cwd()}/day-23/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("solvePart2()", () => {
        it("returns the state correctly for the sample input for part 2 with 6 picoseconds allowed", async () => {
            const path = `${Deno.cwd()}/day-23/sample-input-0.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("generateConnectionMap()", () => {
        it("returns a map of all computer connections correctly", async () => {
            const path = `${Deno.cwd()}/day-23/sample-input-0.txt`;
            const input = await readPuzzleInput(path);
            const result = generateConnectionMap(input);

            expect(result).toEqual({
                ab: { bc: true, cd: true },
                bc: { cd: true },
                ce: { ed: true },
                df: { fo: true },
            });
        });
    });
});
