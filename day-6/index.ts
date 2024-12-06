export async function solveDay6Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-6/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay6Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-6/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<string[][]> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines.map((line) => line.split(""));
}

export function findStartingPos(input: string[][]): [number, number] {
    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[0].length; x++) {
            const entry = input[y][x];

            if (entry === "^") {
                return [y, x];
            }
        }
    }

    throw new Error("No starting position found!");
}
