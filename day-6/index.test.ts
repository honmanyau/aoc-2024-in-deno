import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import {
    findRuleViolations,
    fixInvalidUpdate,
    isValidUpdate,
    readPuzzleInput,
    solvePart1,
    solvePart2,
} from "./index.ts";

describe("Day 5", () => {
    describe("readPuzzleInput()", () => {
        it("returns an array of paris of numbers for printing rules, and an array of arrays of numbers as updates", async () => {
            const path = `${Deno.cwd()}/day-6/sample-input.txt`;
            const [rules, updates] = await readPuzzleInput(path);

            expect(false);
    });
});
