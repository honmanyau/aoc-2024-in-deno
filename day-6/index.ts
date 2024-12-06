export async function solveDay6Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-6/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
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

export function solvePart1(input: string[][]): number {
    const pos = findStartingPos(input);

    input[pos[0]][pos[1]] = "X";

    let direction = [-1, 0];
    let steps = 1;

    while (
        input[pos[0] + direction[0]]?.[pos[1] + direction[1]] !== undefined
    ) {
        const nextTile = input[pos[0] + direction[0]]?.[pos[1] + direction[1]];

        if (nextTile === ".") {
            input[pos[0] + direction[0]][pos[1] + direction[1]] = "X";
            pos[0] += direction[0];
            pos[1] += direction[1];
            steps += 1;
        }

        if (nextTile === "X") {
            pos[0] += direction[0];
            pos[1] += direction[1];
        }

        if (nextTile === "#") {
            if (direction[0] === -1 && direction[1] === 0) {
                direction = [0, 1];
            } else if (direction[0] === 0 && direction[1] === 1) {
                direction = [1, 0];
            } else if (direction[0] === 1 && direction[1] === 0) {
                direction = [0, -1];
            } else if (direction[0] === 0 && direction[1] === -1) {
                direction = [-1, 0];
            }
        }
    }

    return steps;
}
