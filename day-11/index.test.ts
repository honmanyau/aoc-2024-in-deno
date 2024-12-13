import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { blink, readPuzzleInput, solvePart1, solvePart2 } from "./index.ts";

describe("Day 11", () => {
    describe("readPuzzleInput()", () => {
        it("returns the sample puzzle input correctly", async () => {
            const path = `${Deno.cwd()}/day-11/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual(["125", "17"]);
        });
    });

    describe("blink()", () => {
        it("returns 1 2024 1 0 9 9 2021976 for the input 0 1 10 99 999", async () => {
            const input = "0 1 10 99 999".split(" ");
            const result = blink(input);

            expect(result).toEqual("1 2024 1 0 9 9 2021976".split(" "));
        });

        it("transform the sample input in the way expected", async () => {
            const path = `${Deno.cwd()}/day-11/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = blink(input);
            const result2 = blink(result);
            const result3 = blink(result2);
            const result4 = blink(result3);
            const result5 = blink(result4);
            const result6 = blink(result5);

            expect(result).toEqual("253000 1 7".split(" "));
            expect(result2).toEqual("253 0 2024 14168".split(" "));
            expect(result3).toEqual("512072 1 20 24 28676032".split(" "));
            expect(result4).toEqual("512 72 2024 2 0 2 4 2867 6032".split(" "));
            expect(result5).toEqual(
                "1036288 7 2 20 24 4048 1 4048 8096 28 67 60 32".split(" ")
            );
            expect(result6).toEqual(
                "2097446912 14168 4048 2 0 2 4 40 48 2024 40 48 80 96 2 8 6 7 6 0 3 2".split(
                    " "
                )
            );
        });
    });

    describe("solvePart1()", () => {
        it("returns 55312 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-11/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(55312);
        });
    });

    describe("solvePart2()", () => {
        it("returns 3 for the fifth sample input", async () => {
            const path = `${Deno.cwd()}/day-11/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2(input);
        });
    });
});
