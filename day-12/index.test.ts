import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput } from "./index.ts";

describe("Day 12", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual(["AAAA", "BBCD", "BBCC", "EEEC"]);
        });
    });
});
