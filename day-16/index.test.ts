import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import {
    DIRECTIONS,
    readPuzzleInput,
    ReindeerState,
    solvePart1,
    solvePart2,
    step,
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

    describe("solvePart1()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-16/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-16/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2(input);
        });
    });

    describe("step()", () => {
        it("returns the correct states when there is only one possible next direction", () => {
            const input = [
                "######".split(""),
                "#....#".split(""),
                "###..#".split(""),
                "#....#".split(""),
                "######".split(""),
            ];

            const state: ReindeerState = {
                position: [1, 1],
                direction: DIRECTIONS.RIGHT,
                score: 0,
            };

            const result = step(input, state);

            expect(result).toEqual([
                {
                    position: [1, 1],
                    direction: DIRECTIONS.RIGHT,
                    score: 1,
                },
            ]);
        });

        it("returns the correct states when there are two possible next directions", () => {
            const input = [
                "######".split(""),
                "#....#".split(""),
                "###..#".split(""),
                "#....#".split(""),
                "######".split(""),
            ];

            const state: ReindeerState = {
                position: [1, 2],
                direction: DIRECTIONS.RIGHT,
                score: 0,
            };

            const result = step(input, state);

            expect(result).toEqual([
                {
                    position: [1, 3],
                    direction: DIRECTIONS.RIGHT,
                    score: 1,
                },
                {
                    position: [1, 3],
                    direction: DIRECTIONS.DOWN,
                    score: 1001,
                },
            ]);
        });

        it("returns the correct states when there are three possible next directions", () => {
            const input = [
                "######".split(""),
                "#....#".split(""),
                "#....#".split(""),
                "#....#".split(""),
                "######".split(""),
            ];

            const state: ReindeerState = {
                position: [2, 1],
                direction: DIRECTIONS.RIGHT,
                score: 0,
            };

            const result = step(input, state);

            expect(result).toEqual([
                {
                    position: [2, 2],
                    direction: DIRECTIONS.RIGHT,
                    score: 1,
                },
                {
                    position: [2, 2],
                    direction: DIRECTIONS.UP,
                    score: 1001,
                },
                {
                    position: [2, 2],
                    direction: DIRECTIONS.DOWN,
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
                direction: DIRECTIONS.RIGHT,
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
                direction: DIRECTIONS.LEFT,
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
                direction: DIRECTIONS.UP,
                score: 0,
            };

            const result = step(input, state);

            expect(result).toBeUndefined();
        });
    });
});
