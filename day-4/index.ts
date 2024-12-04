export async function solveDay4Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-4/input.txt`;
    const input = await readPuzzleInput(path);
    const xmases = findXmases(input);

    return xmases;
}

export async function solveDay4Part2(): Promise<number> {
    return -1;
}

export async function readPuzzleInput(path: string): Promise<string[]> {
    const content = await Deno.readTextFile(path);

    return content.trim().split("\n");
}

export function findXmases(input: string[]): number {
    let count = 0;

    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[0].length; x++) {
            if (input[y][x] !== "X") continue;

            // Horizontal, left to right.
            if (
                input[y]?.[x + 1] === "M" &&
                input[y]?.[x + 2] === "A" &&
                input[y]?.[x + 3] === "S"
            ) {
                count++;
            }

            // Horizontal, right to left.
            if (
                input[y]?.[x - 1] === "M" &&
                input[y]?.[x - 2] === "A" &&
                input[y]?.[x - 3] === "S"
            ) {
                count++;
            }

            // Vertical, top to bottom.
            if (
                input[y + 1]?.[x] === "M" &&
                input[y + 2]?.[x] === "A" &&
                input[y + 3]?.[x] === "S"
            ) {
                count++;
            }

            // Vertical, bottom to top.
            if (
                input[y - 1]?.[x] === "M" &&
                input[y - 2]?.[x] === "A" &&
                input[y - 3]?.[x] === "S"
            ) {
                count++;
            }

            // Diagonal, to top left.
            if (
                input[y - 1]?.[x - 1] === "M" &&
                input[y - 2]?.[x - 2] === "A" &&
                input[y - 3]?.[x - 3] === "S"
            ) {
                count++;
            }

            // Diagonal, to top right.
            if (
                input[y - 1]?.[x + 1] === "M" &&
                input[y - 2]?.[x + 2] === "A" &&
                input[y - 3]?.[x + 3] === "S"
            ) {
                count++;
            }

            // Diagonal, to bottom left.
            if (
                input[y + 1]?.[x - 1] === "M" &&
                input[y + 2]?.[x - 2] === "A" &&
                input[y + 3]?.[x - 3] === "S"
            ) {
                count++;
            }

            // Diagonal, to bottom right.
            if (
                input[y + 1]?.[x + 1] === "M" &&
                input[y + 2]?.[x + 2] === "A" &&
                input[y + 3]?.[x + 3] === "S"
            ) {
                count++;
            }
        }
    }

    return count;
}
