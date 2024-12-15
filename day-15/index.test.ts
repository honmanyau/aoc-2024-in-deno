import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput, step } from "./index.ts";

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

    describe("solvePart1()", () => {
        it("returns 12 for the sample input after 100 seconds", async () => {
            const path = `${Deno.cwd()}/day-15/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-15/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });
});
