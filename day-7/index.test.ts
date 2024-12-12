import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import {
    constructEquations,
    evaluate,
    readPuzzleInput,
    solvePart1,
} from "./index.ts";

describe("Day 7", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-7/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                "190: 10 19",
                "3267: 81 40 27",
                "83: 17 5",
                "156: 15 6",
                "7290: 6 8 6 15",
                "161011: 16 10 13",
                "192: 17 8 14",
                "21037: 9 7 18 13",
                "292: 11 6 16 20",
            ]);
        });
    });

    describe("evaluate()", () => {
        describe("without concatenation", () => {
            it("returns 190 for the calibration equation 190: 10 19", () => {
                const result = evaluate("190: 10 19");

                expect(result).toBe(190);
            });

            it("returns 3267 for the calibration equation 3267: 81 40 27", () => {
                const result = evaluate("3267: 81 40 27");

                expect(result).toBe(3267);
            });

            it("returns 292 for the calibration equation 292: 11 6 16 20", () => {
                const result = evaluate("292: 11 6 16 20");

                expect(result).toBe(292);
            });

            it("returns undefined for the calibration equation 83: 17 5", () => {
                const result = evaluate("83: 17 5");

                expect(result).toBe(undefined);
            });

            it("returns undefined for the calibration equation 156: 15 6", () => {
                const result = evaluate("156: 15 6");

                expect(result).toBe(undefined);
            });

            it("returns undefined for the calibration equation 7290: 6 8 6 15", () => {
                const result = evaluate("7290: 6 8 6 15");

                expect(result).toBe(undefined);
            });

            it("returns undefined for the calibration equation 161011: 16 10 13", () => {
                const result = evaluate("161011: 16 10 13");

                expect(result).toBe(undefined);
            });

            it("returns undefined for the calibration equation 192: 17 8 14", () => {
                const result = evaluate("192: 17 8 14");

                expect(result).toBe(undefined);
            });

            it("returns undefined for the calibration equation 21037: 9 7 18 13", () => {
                const result = evaluate("21037: 9 7 18 13");

                expect(result).toBe(undefined);
            });
        });

        describe("with concatenation", () => {
            it("returns 190 for the calibration equation 190: 10 19", () => {
                const result = evaluate("190: 10 19", true);

                expect(result).toBe(190);
            });

            it("returns 3267 for the calibration equation 3267: 81 40 27", () => {
                const result = evaluate("3267: 81 40 27", true);

                expect(result).toBe(3267);
            });

            it("returns 292 for the calibration equation 292: 11 6 16 20", () => {
                const result = evaluate("292: 11 6 16 20", true);

                expect(result).toBe(292);
            });

            it("returns 156 for the calibration equation 156: 15 6", () => {
                const result = evaluate("156: 15 6", true);

                expect(result).toBe(156);
            });

            it("returns 7290 for the calibration equation 7290: 6 8 6 15", () => {
                const result = evaluate("7290: 6 8 6 15", true);

                expect(result).toBe(7290);
            });

            it("returns 192 for the calibration equation 192: 17 8 14", () => {
                const result = evaluate("192: 17 8 14", true);

                expect(result).toBe(192);
            });

            it("returns undefined for the calibration equation 83: 17 5", () => {
                const result = evaluate("83: 17 5", true);

                expect(result).toBe(undefined);
            });

            it("returns undefined for the calibration equation 161011: 16 10 13", () => {
                const result = evaluate("161011: 16 10 13", true);

                expect(result).toBe(undefined);
            });

            it("returns undefined for the calibration equation 21037: 9 7 18 13", () => {
                const result = evaluate("21037: 9 7 18 13", true);

                expect(result).toBe(undefined);
            });
        });
    });

    describe("constructEquation()", () => {
        it('returns the equations "10 + 19" and "10 * 19" for the operands [10, 19]', () => {
            const result = constructEquations([10, 19]);

            expect(result).toEqual([
                [10, "+", 19],
                [10, "*", 19],
                [10, "||", 19],
            ]);
        });

        it('returns the equations "81 + 40 + 27", "81 * 40 + 27", "81 + 40 * 27", and "81 * 40 * 27" for the operands [81, 40, 27]', () => {
            const result = constructEquations([81, 40, 27]);

            expect(result).toEqual([
                [81, "+", 40, "+", 27],
                [81, "+", 40, "*", 27],
                [81, "+", 40, "||", 27],
                [81, "*", 40, "+", 27],
                [81, "*", 40, "*", 27],
                [81, "*", 40, "||", 27],
                [81, "||", 40, "+", 27],
                [81, "||", 40, "*", 27],
                [81, "||", 40, "||", 27],
            ]);
        });
    });

    describe("solvePart1()", () => {
        it("returns 3749 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-7/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(3749);
        });
    });

    // describe("solvePart2()", () => {

    // });
});
