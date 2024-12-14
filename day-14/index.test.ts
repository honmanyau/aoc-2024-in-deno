import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import {
    Position,
    readPuzzleInput,
    solvePart1,
    solvePart2,
    step,
    Vector,
} from "./index.ts";

describe("Day 14", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                [
                    [4, 0],
                    [-3, 3],
                ],
                [
                    [3, 6],
                    [-3, -1],
                ],
                [
                    [3, 10],
                    [2, -1],
                ],
                [
                    [0, 2],
                    [-1, 2],
                ],
                [
                    [0, 0],
                    [3, 1],
                ],
                [
                    [0, 3],
                    [-2, -2],
                ],
                [
                    [6, 7],
                    [-3, -1],
                ],
                [
                    [0, 3],
                    [-2, -1],
                ],
                [
                    [3, 9],
                    [3, 2],
                ],
                [
                    [3, 7],
                    [2, -1],
                ],
                [
                    [4, 2],
                    [-3, 2],
                ],
                [
                    [5, 9],
                    [-3, -3],
                ],
            ]);
        });
    });

    describe("step()", () => {
        it("returns [0, 1] for the position [0, 0] and velocity [0, 1] after 1 second for a 11x7 grid", async () => {
            const position: Position = [0, 0];
            const velocity: Vector = [0, 1];
            const finalPosition = step(position, velocity, 1, [11, 7]);

            expect(finalPosition).toEqual([0, 1]);
        });

        it("returns [0, 2] for the position [0, 0] and velocity [0, 1] after 2 second for a 11x7 grid", async () => {
            const position: Position = [0, 0];
            const velocity: Vector = [0, 1];
            const finalPosition = step(position, velocity, 2, [11, 7]);

            expect(finalPosition).toEqual([0, 2]);
        });

        it("returns [0, 10] for the position [0, 0] and velocity [0, 1] after 10 second for a 11x7 grid", async () => {
            const position: Position = [0, 0];
            const velocity: Vector = [0, 1];
            const finalPosition = step(position, velocity, 10, [11, 7]);

            expect(finalPosition).toEqual([0, 10]);
        });

        it("returns [0, 0] for the position [0, 0] and velocity [0, 1] after 11 second for a 11x7 grid", async () => {
            const position: Position = [0, 0];
            const velocity: Vector = [0, 1];
            const finalPosition = step(position, velocity, 11, [11, 7]);

            expect(finalPosition).toEqual([0, 0]);
        });

        it("returns [0, 0] for the position [0, 0] and velocity [0, 1] after 9 second for a 11x7 grid", async () => {
            const position: Position = [0, 0];
            const velocity: Vector = [1, 2];
            const finalPosition = step(position, velocity, 11, [11, 7]);

            expect(finalPosition).toEqual([1, 7]);
        });
    });

    describe("solvePart1()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2([input[0]]);
        });
    });
});
