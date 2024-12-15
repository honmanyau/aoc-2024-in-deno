import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput } from "./index.ts";

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
        it("returns same map and robot position after the first step", async () => {
            const path = `${Deno.cwd()}/day-15/sample-input.txt`;
            const [map, instructions] = await readPuzzleInput(path);
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
