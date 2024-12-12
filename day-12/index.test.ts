import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import {
    findRegion,
    findRegions,
    readPuzzleInput,
    solvePart1,
} from "./index.ts";

describe("Day 12", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                ["A", "A", "A", "A"],
                ["B", "B", "C", "D"],
                ["B", "B", "C", "C"],
                ["E", "E", "E", "C"],
            ]);
        });
    });

    describe("solvePart1()", () => {
        it(`returns 140 for the first sample input`, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const price = solvePart1(input);

            expect(price).toEqual(140);
        });

        it(`returns 772 for the second sample input`, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input-2.txt`;
            const input = await readPuzzleInput(path);
            const price = solvePart1(input);

            expect(price).toEqual(772);
        });

        it(`returns 1930 for the third sample input`, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input-3.txt`;
            const input = await readPuzzleInput(path);
            const price = solvePart1(input);

            expect(price).toEqual(1930);
        });
    });

    describe("findRegions()", () => {
        it(`returns ["A", 4, 10], ["B", 4, 8], ["C", 4, 10], ["D", 1, 4], and ["E", 3, 8] for \`sample-input\``, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const regions = findRegions(input);

            expect(regions).toEqual([
                ["A", 4, 10],
                ["B", 4, 8],
                ["C", 4, 10],
                ["D", 1, 4],
                ["E", 3, 8],
            ]);
        });

        it(`returns ["O", 21, 36], ["X", 1, 4], ["X", 1, 4], ["X", 1, 4], and ["X", 1, 4] for
            \`sample-input-2\``, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input-2.txt`;
            const input = await readPuzzleInput(path);
            const regions = findRegions(input);

            expect(regions).toEqual([
                ["O", 21, 36],
                ["X", 1, 4],
                ["X", 1, 4],
                ["X", 1, 4],
                ["X", 1, 4],
            ]);
        });

        it(`returns the correct regions for \`sample-input-3\``, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input-3.txt`;
            const input = await readPuzzleInput(path);
            const regions = findRegions(input);

            expect(regions).toEqual([
                ["R", 12, 18],
                ["I", 4, 8],
                ["C", 14, 28],
                ["F", 10, 18],
                ["V", 13, 20],
                ["J", 11, 20],
                ["C", 1, 4],
                ["E", 13, 18],
                ["I", 14, 22],
                ["M", 5, 12],
                ["S", 3, 8],
            ]);
        });
    });

    describe("findRegion()", () => {
        it(`returns ["A", 4, 10] for \`sample-input\` starting at [0, 0]`, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const [region, _visited] = findRegion(input, [0, 0]);

            expect(region).toEqual(["A", 4, 10]);
        });

        it(`returns ["A", 4, 10] for \`sample-input\` starting at [0, 1]`, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const [region, _visited] = findRegion(input, [0, 1]);

            expect(region).toEqual(["A", 4, 10]);
        });

        it(`returns ["B", 4, 8] for \`sample-input\` starting at [1, 0]`, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const [region, _visited] = findRegion(input, [1, 0]);

            expect(region).toEqual(["B", 4, 8]);
        });

        it(`returns ["C", 4, 10] for \`sample-input\` starting at [1, 2]`, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const [region, _visited] = findRegion(input, [1, 2]);

            expect(region).toEqual(["C", 4, 10]);
        });

        it(`returns ["C", 4, 10] for \`sample-input\` starting at [3, 3]`, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const [region, _visited] = findRegion(input, [3, 3]);

            expect(region).toEqual(["C", 4, 10]);
        });

        it(`returns ["D", 1, 4] for \`sample-input\` starting at [1, 3]`, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const [region, _visited] = findRegion(input, [1, 3]);

            expect(region).toEqual(["D", 1, 4]);
        });

        it(`returns ["E", 3, 8] for \`sample-input\` starting at [0, 3]`, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const [region, _visited] = findRegion(input, [3, 0]);

            expect(region).toEqual(["E", 3, 8]);
        });

        it(`returns ["E", 3, 8] for \`sample-input\` starting at [1, 3]`, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const [region, _visited] = findRegion(input, [3, 1]);

            expect(region).toEqual(["E", 3, 8]);
        });
    });
});
