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
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, updates] = await readPuzzleInput(path);

            expect(rules).toEqual({
                "29": {
                    "13": true,
                },
                "47": {
                    "13": true,
                    "29": true,
                    "53": true,
                    "61": true,
                },
                "53": {
                    "13": true,
                    "29": true,
                },
                "61": {
                    "13": true,
                    "29": true,
                    "53": true,
                },
                "75": {
                    "13": true,
                    "29": true,
                    "47": true,
                    "53": true,
                    "61": true,
                },
                "97": {
                    "13": true,
                    "29": true,
                    "47": true,
                    "53": true,
                    "61": true,
                    "75": true,
                },
            });

            expect(updates).toEqual([
                [75, 47, 61, 53, 29],
                [97, 61, 53, 29, 13],
                [75, 29, 13],
                [75, 97, 47, 61, 53],
                [61, 13, 29],
                [97, 13, 75, 29, 47],
            ]);
        });
    });

    describe("isValidUpdate()", () => {
        it("returns true for the first update in the sample input", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, updates] = await readPuzzleInput(path);
            const result = await isValidUpdate(rules, updates[0]);

            expect(result).toBe(true);
        });

        it("returns true for the second update of the sample input", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, updates] = await readPuzzleInput(path);
            const result = await isValidUpdate(rules, updates[1]);

            expect(result).toBe(true);
        });

        it("returns true for the third update of the sample input", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, updates] = await readPuzzleInput(path);
            const result = await isValidUpdate(rules, updates[2]);

            expect(result).toBe(true);
        });

        it("returns false for the fourth update of the sample input", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, updates] = await readPuzzleInput(path);
            const result = await isValidUpdate(rules, updates[3]);

            expect(result).toBe(false);
        });

        it("returns false for the fourth update of the sample input", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, updates] = await readPuzzleInput(path);
            const result = await isValidUpdate(rules, updates[4]);

            expect(result).toBe(false);
        });

        it("returns false for the fourth update of the sample input", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, updates] = await readPuzzleInput(path);
            const result = await isValidUpdate(rules, updates[5]);

            expect(result).toBe(false);
        });
    });

    describe("findRuleViolations()", () => {
        it("for the rule 1|2 and update [1, 2, 3, 4]", () => {
            const rules = { 1: { 2: true } } as const;
            const update = [1, 2, 3, 4];
            const violations = findRuleViolations(rules, update);

            expect(violations).toEqual({});
        });

        it("for the rule 1|2 and update [2, 1, 3, 4]", () => {
            const rules = { 1: { 2: true } } as const;
            const update = [2, 1, 3, 4];
            const violations = findRuleViolations(rules, update);

            expect(violations).toEqual({ 1: { 2: true } });
        });

        it("for the rules 1|2, 1|3 and update [2, 3, 1, 4]", () => {
            const rules = { 1: { 2: true, 3: true } } as const;
            const update = [2, 3, 1, 4];
            const violations = findRuleViolations(rules, update);

            expect(violations).toEqual({ 1: { 2: true, 3: true } });
        });

        it("for the rules 1|2, 1|3 and update [2, 3, 1, 4]", () => {
            const rules = { 1: { 2: true, 3: true } } as const;
            const update = [2, 3, 1, 4];
            const violations = findRuleViolations(rules, update);

            expect(violations).toEqual({ 1: { 2: true, 3: true } });
        });

        it("for the rules 1|2, 1|3, 2|3 and update [3, 2, 1, 4]", () => {
            const rules = { 1: { 2: true, 3: true }, 2: { 3: true } } as const;
            const update = [3, 2, 1, 4];
            const violations = findRuleViolations(rules, update);

            expect(violations).toEqual({
                1: { 2: true, 3: true },
                2: { 3: true },
            });
        });
    });

    describe("fixInvalidUpdate()", () => {
        it("for the rule 1|2 and update [2, 1, 3, 4]", () => {
            const rules = { 1: { 2: true } } as const;
            const update = [2, 1, 3, 4];
            const violations = findRuleViolations(rules, update);
            const fixedUpdate = fixInvalidUpdate(rules, violations, update);

            expect(fixedUpdate).toEqual([1, 2, 3, 4]);
        });

        it("for the rules 1|2, 1|3 and update [2, 3, 1, 4]", () => {
            const rules = { 1: { 2: true, 3: true } } as const;
            const update = [2, 3, 1, 4];
            const violations = findRuleViolations(rules, update);
            const fixedUpdate = fixInvalidUpdate(rules, violations, update);

            expect(fixedUpdate).toEqual([1, 2, 3, 4]);
        });

        it("for the rules 1|2, 1|3 and update [2, 3, 1, 4]", () => {
            const rules = { 1: { 2: true, 3: true } } as const;
            const update = [2, 3, 1, 4];
            const violations = findRuleViolations(rules, update);
            const fixedUpdate = fixInvalidUpdate(rules, violations, update);

            expect(fixedUpdate).toEqual([1, 2, 3, 4]);
        });

        it("for the rules 1|2, 1|3, 2|3 and update [3, 2, 1, 4]", () => {
            const rules = { 1: { 2: true, 3: true }, 2: { 3: true } } as const;
            const update = [3, 2, 1, 4];
            const violations = findRuleViolations(rules, update);
            const fixedUpdate = fixInvalidUpdate(rules, violations, update);

            expect(fixedUpdate).toEqual([1, 2, 3, 4]);
        });

        it("transforms the example update [75, 97, 47, 61, 53] to [97, 75, 47 ,61, 53]", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, _updates] = await readPuzzleInput(path);
            const update = [75, 97, 47, 61, 53];
            const violations = findRuleViolations(rules, update);
            const fixedUpdate = fixInvalidUpdate(rules, violations, update);

            expect(fixedUpdate).toEqual([97, 75, 47, 61, 53]);
        });

        it("transforms the example update [75, 97, 47, 61, 53] to [97, 75, 47 ,61, 53]", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, _updates] = await readPuzzleInput(path);
            const update = [75, 97, 47, 61, 53];
            const violations = findRuleViolations(rules, update);
            const fixedUpdate = fixInvalidUpdate(rules, violations, update);

            expect(fixedUpdate).toEqual([97, 75, 47, 61, 53]);
        });

        it("transforms the example update [61, 13, 29] to [61, 29, 13]", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, _updates] = await readPuzzleInput(path);
            const update = [61, 13, 29];
            const violations = findRuleViolations(rules, update);
            const fixedUpdate = fixInvalidUpdate(rules, violations, update);

            expect(fixedUpdate).toEqual([61, 29, 13]);
        });

        it("transforms the example update [97, 13, 75, 29, 47] to [97, 75, 47, 29, 13]", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, _updates] = await readPuzzleInput(path);
            const update = [97, 13, 75, 29, 47];
            const violations = findRuleViolations(rules, update);
            const fixedUpdate = fixInvalidUpdate(rules, violations, update);

            expect(fixedUpdate).toEqual([97, 75, 47, 29, 13]);
        });
    });

    describe("solvePart1()", () => {
        it("returns 143 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, updates] = await readPuzzleInput(path);
            const result = await solvePart1(rules, updates);

            expect(result).toBe(143);
        });
    });

    describe("solvePart2()", () => {
        it("returns 123 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-5/sample-input.txt`;
            const [rules, updates] = await readPuzzleInput(path);
            const result = await solvePart2(rules, updates);

            expect(result).toBe(123);
        });
    });
});
