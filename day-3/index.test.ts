import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { readPuzzleInput } from "./index.ts";

describe("Day 3", () => {
    describe("readPuzzleInput()", () => {
        it("returns and array of arrays of integers of equal length", async () => {
            const path = `${Deno.cwd()}/day-3/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(false);
        });
    });
});
