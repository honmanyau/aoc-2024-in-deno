import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { adv, bxl, getComboOperandValue, readPuzzleInput } from "./index.ts";

describe("Day 17", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-17/sample-input-0.txt`;
            const [registers, program] = await readPuzzleInput(path);

            expect(registers).toEqual({
                A: 256,
                B: 0,
                C: 42,
            });

            expect(program).toEqual([
                ["0", 3],
                ["1", 2],
                ["4", 0],
            ]);
        });
    });

    describe("getComboOperandValue()", () => {
        it("returns the correct value as described in the puzzle", async () => {
            const registers = {
                A: 256,
                B: 42,
                C: 24,
            };

            const operand0 = 0;
            const operand1 = 1;
            const operand2 = 2;
            const operand3 = 3;
            const operand4 = 4;
            const operand5 = 5;
            const operand6 = 6;
            const operand7 = 7;

            const result0 = getComboOperandValue(registers, operand0);
            const result1 = getComboOperandValue(registers, operand1);
            const result2 = getComboOperandValue(registers, operand2);
            const result3 = getComboOperandValue(registers, operand3);
            const result4 = getComboOperandValue(registers, operand4);
            const result5 = getComboOperandValue(registers, operand5);
            const result6 = getComboOperandValue(registers, operand6);

            expect(result0).toBe(0);
            expect(result1).toBe(1);
            expect(result2).toBe(2);
            expect(result3).toBe(3);
            expect(result4).toBe(registers.A);
            expect(result5).toBe(registers.B);
            expect(result6).toBe(registers.C);
            expect(() => getComboOperandValue(registers, operand7)).toThrow();
        });
    });

    describe("adv()", () => {
        it("returns the correct value as described in the puzzle", async () => {
            const registers = {
                A: 256,
                B: 4,
                C: 24,
            };

            adv(registers, 1);

            expect(registers).toEqual({
                A: 128,
                B: 4,
                C: 24,
            });

            adv(registers, 5);

            expect(registers).toEqual({
                A: 8,
                B: 4,
                C: 24,
            });

            registers.A = 9;
            adv(registers, 2);

            expect(registers).toEqual({
                A: 2,
                B: 4,
                C: 24,
            });
        });
    });

    describe("bxl()", () => {
        it("returns the correct value as described in the puzzle", async () => {
            const registers = {
                A: 256,
                B: 5,
                C: 24,
            };

            bxl(registers, 3);

            expect(registers).toEqual({
                A: 256,
                B: 6,
                C: 24,
            });
        });
    });

    describe("solvePart1()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-17/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-17/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });
});
