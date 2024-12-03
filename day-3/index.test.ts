import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { calculateSumOfProducts, findMuls, readPuzzleInput } from "./index.ts";

describe("Day 3", () => {
    describe("readPuzzleInput()", () => {
        it("returns and array of arrays of integers of equal length", async () => {
            const path = `${Deno.cwd()}/day-3/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toBe(
                `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
            );
        });
    });

    describe("findMuls()", () => {
        it("returns [[2, 4], [5, 5], [11, 8], [8, 5]] for the sample input", async () => {
            const path = `${Deno.cwd()}/day-3/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = findMuls(input);

            expect(result).toEqual([
                [2, 4],
                [5, 5],
                [11, 8],
                [8, 5],
            ]);
        });

        it("returns [[42, 24]] for the input mul(42,24)", () => {
            const input = `mul(42,24)`;
            const result = findMuls(input);

            expect(result).toEqual([[42, 24]]);
        });

        it("returns [[424, 242]] for the input mul(424,242)", () => {
            const input = `mul(424,242)`;
            const result = findMuls(input);

            expect(result).toEqual([[424, 242]]);
        });

        it("returns [] for the input mul(424,2424)", () => {
            const input = `mul(424,2424)`;
            const result = findMuls(input);

            expect(result).toEqual([]);
        });
    });

    describe("findMulsPart2()", () => {
        it("returns [[2, 4], [8, 5]] for the sample input", async () => {
            const path = `${Deno.cwd()}/day-3/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = findMulsPart2(input);

            expect(result).toEqual([
                [2, 4],
                [8, 5],
            ]);
        });

        it("returns [[42, 24]] for the input mul(42,24)", () => {
            const input = `do()mul(42,24)`;
            const result = findMulsPart2(input);

            expect(result).toEqual([[42, 24]]);
        });

        it("returns [] for the input don't()mul(42,24)", () => {
            const input = `don't()mul(42,24)`;
            const result = findMulsPart2(input);

            expect(result).toEqual([]);
        });

        it("returns [[42, 24], [424, 242]] for the input mul(42,24)mul(424,242)", () => {
            const input = `mul(42,24)mul(424,242)`;
            const result = findMulsPart2(input);

            expect(result).toEqual([
                [42, 24],
                [424, 242],
            ]);
        });

        it("returns [[42, 24], [424, 242]] for the input mul(42,24)do()mul(424,242)", () => {
            const input = `mul(42,24)do()mul(424,242)`;
            const result = findMulsPart2(input);

            expect(result).toEqual([
                [42, 24],
                [424, 242],
            ]);
        });

        it("returns [[42, 24]] for the input mul(42,24)don't()mul(424,242)", () => {
            const input = `mul(42,24)don't()mul(424,242)`;
            const result = findMulsPart2(input);

            expect(result).toEqual([[42, 24]]);
        });

        it("returns [] for the input don't()mul(42,24)mul(424,242)", () => {
            const input = `don't()mul(42,24)mul(424,242)`;
            const result = findMulsPart2(input);

            expect(result).toEqual([]);
        });

        it("returns [[424, 242]] for the input mul(424,242)", () => {
            const input = `mul(424,242)`;
            const result = findMulsPart2(input);

            expect(result).toEqual([[424, 242]]);
        });

        it("returns [] for the input mul(424,2424)", () => {
            const input = `mul(424,2424)`;
            const result = findMulsPart2(input);

            expect(result).toEqual([]);
        });
    });

    describe("calculateSumOfProducts()", () => {
        it("returns 161 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-3/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const instructions = findMuls(input);
            const result = calculateSumOfProducts(instructions);

            expect(result).toEqual(161);
        });
    });
});

function findMulsPart2(input: string) {
    throw new Error("Function not implemented.");
}
