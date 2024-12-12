import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput } from "./index.ts";

describe("Day 12", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly", async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });
});
