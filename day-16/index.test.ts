import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import {
    DIRECTION,
    readPuzzleInput,
    ReindeerState,
    solvePart1,
    solvePart2,
    step,
    walk,
} from "./index.ts";

describe("Day 16", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-16/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const secondLine = input[1];
            const secondLastLine = input[input.length - 3];

            expect(secondLine).toEqual("#.......#....E#".split(""));
            expect(secondLastLine).toEqual("#S..#.....#...#".split(""));
        });
    });

    describe("step()", () => {
        it("returns the correct states", () => {
            const input = [
                "######".split(""),
                "#....#".split(""),
                "#....#".split(""),
                "#....#".split(""),
                "######".split(""),
            ];

            const state: ReindeerState = {
                position: [2, 1],
                direction: DIRECTION.RIGHT,
                score: 0,
            };

            const result = step(input, state);

            expect(result).toEqual([
                {
                    position: [2, 2],
                    direction: DIRECTION.RIGHT,
                    score: 1,
                },
                {
                    position: [2, 2],
                    direction: DIRECTION.UP,
                    score: 1001,
                },
                {
                    position: [2, 2],
                    direction: DIRECTION.DOWN,
                    score: 1001,
                },
            ]);
        });

        it("returns an empty array when the reindeer has reached the end", () => {
            const input = [
                "######".split(""),
                "#..E.#".split(""),
                "###..#".split(""),
                "#....#".split(""),
                "######".split(""),
            ];

            const state: ReindeerState = {
                position: [1, 2],
                direction: DIRECTION.RIGHT,
                score: 0,
            };

            const result = step(input, state);

            expect(result).toEqual([]);
        });

        it("returns `undefined` when heading left into a dead end", () => {
            const input = [
                "######".split(""),
                "#....#".split(""),
                "###..#".split(""),
                "#....#".split(""),
                "######".split(""),
            ];

            const state: ReindeerState = {
                position: [1, 1],
                direction: DIRECTION.LEFT,
                score: 0,
            };

            const result = step(input, state);

            expect(result).toBeUndefined();
        });

        it("returns `undefined` when heading up into a dead end", () => {
            const input = [
                "######".split(""),
                "#.#..#".split(""),
                "#.#..#".split(""),
                "#....#".split(""),
                "######".split(""),
            ];

            const state: ReindeerState = {
                position: [1, 1],
                direction: DIRECTION.UP,
                score: 0,
            };

            const result = step(input, state);

            expect(result).toBeUndefined();
        });
    });

    describe("walk()", () => {
        it("returns 7036 for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-16/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = walk(input);

            for (const state of Object.values(result)) {
                expect(state.score).toBe(7036);
            }
        });

        it("returns 11048 for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-16/sample-input-2.txt`;
            const input = await readPuzzleInput(path);
            const result = walk(input);

            for (const state of Object.values(result)) {
                expect(state.score).toBe(11048);
            }
        });
    });

    describe("solvePart1()", () => {
        it("returns 7036 for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-16/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(7036);
        });

        it("returns 11048 for the second sample input", async () => {
            const path = `${Deno.cwd()}/day-16/sample-input-2.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(11048);
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-16/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2(input);
        });
    });
});
