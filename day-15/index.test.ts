import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import {
    Position,
    readPuzzleInput,
    solvePart1,
    solvePart2,
    step,
} from "./index.ts";

describe("Day 15", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-15/sample-input.txt`;
            const [map, robotPosition, instructions] = await readPuzzleInput(
                path
            );

            expect(map.slice(0, 2)).toEqual([
                "##########".split(""),
                "#..O..O.O#".split(""),
            ]);

            expect(robotPosition).toEqual([4, 4]);

            expect(instructions.slice(0, 10)).toBe("<vv>^<v^>v");
        });
    });

    describe("step()", () => {
        it("simulates the first few steps for the second input correctly", async () => {
            const path = `${Deno.cwd()}/day-15/sample-input-2.txt`;
            const [map, robotPosition, instructions] = await readPuzzleInput(
                path
            );

            let newRobotPosition = step(map, robotPosition, instructions[0]);

            expect(newRobotPosition).toEqual(robotPosition);

            newRobotPosition = step(map, newRobotPosition, instructions[1]);

            expect(newRobotPosition).toEqual([1, 2]);
            expect(map[2][2]).toBe(".");

            newRobotPosition = step(map, newRobotPosition, instructions[2]);

            expect(newRobotPosition).toEqual([1, 2]);
            expect(map[1][3]).toBe("O");
            expect(map[1][4]).toBe(".");

            newRobotPosition = step(map, newRobotPosition, instructions[3]);

            expect(newRobotPosition).toEqual([1, 3]);
            expect(map[1][2]).toBe(".");
            expect(map[1][4]).toBe("O");
            expect(map[1][5]).toBe("O");

            newRobotPosition = step(map, newRobotPosition, instructions[4]);

            expect(newRobotPosition).toEqual([1, 4]);
            expect(map[1][3]).toBe(".");
            expect(map[1][5]).toBe("O");
            expect(map[1][6]).toBe("O");
        });
    });

    describe("step() part 2", () => {
        it("moves correctly", () => {
            const map = [
                "############".split(""),
                "##@[].....##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "############".split(""),
            ];
            const robotPosition: Position = [1, 2];
            const instruction = ">";
            const newRobotPosition = step(map, robotPosition, instruction);

            expect(newRobotPosition).toEqual([1, 3]);
            expect(map[1][2]).toBe(".");
            expect(map[1][3]).toBe("@");
            expect(map[1][4]).toBe("[");
            expect(map[1][5]).toBe("]");
        });

        it("moves correctly", () => {
            const map = [
                "############".split(""),
                "##@[][]...##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "############".split(""),
            ];
            const robotPosition: Position = [1, 2];
            const instruction = ">";
            const newRobotPosition = step(map, robotPosition, instruction);

            expect(newRobotPosition).toEqual([1, 3]);
            expect(map[1][2]).toBe(".");
            expect(map[1][3]).toBe("@");
            expect(map[1][4]).toBe("[");
            expect(map[1][5]).toBe("]");
            expect(map[1][6]).toBe("[");
            expect(map[1][7]).toBe("]");
        });

        it("moves correctly", () => {
            const map = [
                "############".split(""),
                "##.[]@....##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "############".split(""),
            ];
            const robotPosition: Position = [1, 5];
            const instruction = "<";
            const newRobotPosition = step(map, robotPosition, instruction);

            expect(newRobotPosition).toEqual([1, 4]);
            expect(map[1][5]).toBe(".");
            expect(map[1][4]).toBe("@");
            expect(map[1][3]).toBe("]");
            expect(map[1][2]).toBe("[");
        });

        it("moves correctly", () => {
            const map = [
                "############".split(""),
                "##.[][]@..##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "############".split(""),
            ];
            const robotPosition: Position = [1, 7];
            const instruction = "<";
            const newRobotPosition = step(map, robotPosition, instruction);

            expect(newRobotPosition).toEqual([1, 6]);
            expect(map[1][7]).toBe(".");
            expect(map[1][6]).toBe("@");
            expect(map[1][5]).toBe("]");
            expect(map[1][4]).toBe("[");
            expect(map[1][3]).toBe("]");
            expect(map[1][2]).toBe("[");
        });

        it("moves correctly", () => {
            const map = [
                "############".split(""),
                "##[][]@...##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "############".split(""),
            ];
            const robotPosition: Position = [1, 6];
            const instruction = "<";
            const newRobotPosition = step(map, robotPosition, instruction);

            expect(newRobotPosition).toEqual([1, 6]);
            expect(map[1][6]).toBe("@");
            expect(map[1][5]).toBe("]");
            expect(map[1][4]).toBe("[");
            expect(map[1][3]).toBe("]");
            expect(map[1][2]).toBe("[");
        });

        it("moves correctly", () => {
            const map = [
                "############".split(""),
                "##....@...##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "############".split(""),
            ];
            const robotPosition: Position = [1, 6];
            const instruction = "<";
            const instruction2 = ">";

            let newRobotPosition = step(map, robotPosition, instruction);

            expect(newRobotPosition).toEqual([1, 5]);
            expect(map[1][6]).toBe(".");
            expect(map[1][5]).toBe("@");

            newRobotPosition = step(map, newRobotPosition, instruction2);

            expect(newRobotPosition).toEqual([1, 6]);
            expect(map[1][6]).toBe("@");
            expect(map[1][5]).toBe(".");
        });

        // Vertical
        it("moves correctly", () => {
            const map = [
                "############".split(""),
                "##@.......##".split(""),
                "##[]......##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "############".split(""),
            ];
            const robotPosition: Position = [1, 2];
            const instruction = "v";
            const newRobotPosition = step(map, robotPosition, instruction);

            expect(newRobotPosition).toEqual([2, 2]);
            expect(map[1][2]).toBe(".");
            expect(map[2][2]).toBe("@");
            expect(map[2][3]).toBe(".");
            expect(map[3][2]).toBe("[");
            expect(map[3][3]).toBe("]");
        });

        it("moves correctly", () => {
            const map = [
                "############".split(""),
                "##.@......##".split(""),
                "##[]......##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "############".split(""),
            ];
            const robotPosition: Position = [1, 3];
            const instruction = "v";
            const newRobotPosition = step(map, robotPosition, instruction);

            expect(newRobotPosition).toEqual([2, 3]);
            expect(map[1][3]).toBe(".");
            expect(map[2][2]).toBe(".");
            expect(map[2][3]).toBe("@");
            expect(map[3][2]).toBe("[");
            expect(map[3][3]).toBe("]");
        });

        it("moves correctly", () => {
            const map = [
                "############".split(""),
                "##@.......##".split(""),
                "##[]......##".split(""),
                "##[]......##".split(""),
                "##........##".split(""),
                "############".split(""),
            ];
            const robotPosition: Position = [1, 2];
            const instruction = "v";
            const newRobotPosition = step(map, robotPosition, instruction);

            expect(newRobotPosition).toEqual([2, 2]);
            expect(map[1][2]).toBe(".");
            expect(map[2][2]).toBe("@");
            expect(map[2][3]).toBe(".");
            expect(map[3][2]).toBe("[");
            expect(map[3][3]).toBe("]");
            expect(map[4][2]).toBe("[");
            expect(map[4][3]).toBe("]");
        });

        it("moves correctly", () => {
            const map = [
                "############".split(""),
                "##.@......##".split(""),
                "##.[].....##".split(""),
                "##[][]....##".split(""),
                "##........##".split(""),
                "############".split(""),
            ];
            const robotPosition: Position = [1, 3];
            const instruction = "v";

            let newRobotPosition = step(map, robotPosition, instruction);

            expect(newRobotPosition).toEqual([2, 3]);
            expect(map[1][3]).toBe(".");
            expect(map[2][3]).toBe("@");
            expect(map[2][4]).toBe(".");
            expect(map[3][3]).toBe("[");
            expect(map[3][4]).toBe("]");
            expect(map[4][2]).toBe("[");
            expect(map[4][3]).toBe("]");
            expect(map[4][4]).toBe("[");
            expect(map[4][5]).toBe("]");

            // Doesn't move
            newRobotPosition = step(map, newRobotPosition, instruction);

            expect(newRobotPosition).toEqual([2, 3]);
            expect(map[1][3]).toBe(".");
            expect(map[2][3]).toBe("@");
            expect(map[2][4]).toBe(".");
            expect(map[3][3]).toBe("[");
            expect(map[3][4]).toBe("]");
            expect(map[4][2]).toBe("[");
            expect(map[4][3]).toBe("]");
            expect(map[4][4]).toBe("[");
            expect(map[4][5]).toBe("]");
        });

        it("moves correctly", () => {
            const map = [
                "############".split(""),
                "##........##".split(""),
                "##.[].....##".split(""),
                "##[][]....##".split(""),
                "##.@......##".split(""),
                "############".split(""),
            ];
            const robotPosition: Position = [4, 3];
            const instruction = "^";

            let newRobotPosition = step(map, robotPosition, instruction);

            expect(newRobotPosition).toEqual([3, 3]);
            expect(map[4][3]).toBe(".");
            expect(map[3][2]).toBe(".");
            expect(map[3][3]).toBe("@");
            expect(map[2][2]).toBe("[");
            expect(map[2][3]).toBe("]");
            expect(map[1][3]).toBe("[");
            expect(map[1][4]).toBe("]");
            expect(map[3][4]).toBe("[");
            expect(map[3][5]).toBe("]");

            // Doesn't move
            newRobotPosition = step(map, newRobotPosition, instruction);

            expect(newRobotPosition).toEqual([3, 3]);
            expect(map[4][3]).toBe(".");
            expect(map[3][2]).toBe(".");
            expect(map[3][3]).toBe("@");
            expect(map[2][2]).toBe("[");
            expect(map[2][3]).toBe("]");
            expect(map[1][3]).toBe("[");
            expect(map[1][4]).toBe("]");
            expect(map[3][4]).toBe("[");
            expect(map[3][5]).toBe("]");
        });

        it("moves correctly", () => {
            const map = [
                "############".split(""),
                "##@.......##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "##........##".split(""),
                "############".split(""),
            ];
            const robotPosition: Position = [1, 2];
            const instruction = "v";
            const instruction2 = "^";

            let newRobotPosition = step(map, robotPosition, instruction);

            expect(newRobotPosition).toEqual([2, 2]);
            expect(map[1][2]).toBe(".");
            expect(map[2][2]).toBe("@");

            newRobotPosition = step(map, newRobotPosition, instruction2);

            expect(newRobotPosition).toEqual([1, 2]);
            expect(map[1][2]).toBe("@");
            expect(map[2][2]).toBe(".");
        });
    });

    describe("solvePart1()", () => {
        it("returns 10092 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-15/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(10092);
        });

        it("returns 2028 for the second sample input", async () => {
            const path = `${Deno.cwd()}/day-15/sample-input-2.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);

            expect(result).toBe(2028);
        });
    });

    describe("solvePart2()", () => {
        it("returns 9021 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-15/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2(input);

            expect(result).toBe(9021);
        });
    });
});
