import { assertEquals } from "@std/assert";

import { solve } from "./index.ts";

Deno.test("Day 1", async (t) => {
    await t.step("solve()", () => {
        const solution = solve();

        assertEquals(solution, true);
    });
});
