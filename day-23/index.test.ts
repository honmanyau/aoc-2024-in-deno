import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import {
    findInterconnectedComputers,
    generateConnectionMap,
    readPuzzleInput,
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
            const path = `${Deno.cwd()}/day-23/sample-input-0.txt`;
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
});
