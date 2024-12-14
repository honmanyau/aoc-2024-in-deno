import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import {
    countQuadrants,
    Position,
    readPuzzleInput,
    solvePart1,
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
            const finalPosition = step(position, velocity, 1, [7, 11]);

            expect(finalPosition).toEqual([0, 1]);
        });

        it("returns [0, 2] for the position [0, 0] and velocity [0, 1] after 2 second for a 11x7 grid", async () => {
            const position: Position = [0, 0];
            const velocity: Vector = [0, 1];
            const finalPosition = step(position, velocity, 2, [7, 11]);

            expect(finalPosition).toEqual([0, 2]);
        });

        it("returns [0, 10] for the position [0, 0] and velocity [0, 1] after 10 second for a 11x7 grid", async () => {
            const position: Position = [0, 0];
            const velocity: Vector = [0, 1];
            const finalPosition = step(position, velocity, 10, [7, 11]);

            expect(finalPosition).toEqual([0, 10]);
        });

        it("returns [0, 0] for the position [0, 0] and velocity [0, 1] after 11 second for a 11x7 grid", async () => {
            const position: Position = [0, 0];
            const velocity: Vector = [0, 1];
            const finalPosition = step(position, velocity, 11, [7, 11]);

            expect(finalPosition).toEqual([0, 0]);
        });

        it("returns [0, 0] for the position [0, 0] and velocity [0, 1] after 9 second for a 11x7 grid", async () => {
            const position: Position = [0, 0];
            const velocity: Vector = [1, 2];
            const finalPosition = step(position, velocity, 9, [7, 11]);

            expect(finalPosition).toEqual([2, 7]);
        });
    });

    describe("countQuadrants()", () => {
        it("returns [1, 2, 3, 1] for the sample input after 100 seconds", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const positions = input.map(([position, velocity]) =>
                step(position, velocity, 100, [7, 11])
            );
            const counts = countQuadrants(positions, [7, 11]);

            expect(counts).toEqual([1, 3, 4, 1]);
        });
    });

    describe("solvePart1()", () => {
        it("returns 12 for the sample input after 100 seconds", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input, [7, 11]);

            expect(result).toBe(12);
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-14/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });
});
