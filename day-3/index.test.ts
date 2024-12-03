import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { readPuzzleInput } from "./index.ts";

describe("Day 3", () => {
    describe("readPuzzleInput()", () => {
        it("returns and array of arrays of integers of equal length", async () => {
            const path = `${Deno.cwd()}/day-3/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toBe(
                `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
            );
        });
    });
});
