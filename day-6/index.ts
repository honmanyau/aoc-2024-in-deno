type Input = string[][];
export type Position = [number, number];
export type Vector = Up | Down | Left | Right;
export type Up = [-1, 0];
export type Down = [1, 0];
export type Left = [0, -1];
export type Right = [0, 1];

export const UP: Up = [-1, 0];
export const DOWN: Down = [1, 0];
export const LEFT: Left = [0, -1];
export const RIGHT: Right = [0, 1];

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

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines.map((line) => line.split(""));
}

export function findStartingPos(input: Input): [number, number] {
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

export function solvePart1(input: Input): number {
    const startingPosition = findStartingPos(input);

    const visitedPositions: Record<string, boolean> = {
        [`${startingPosition.join(",")}`]: true,
    };

    let position: Position = [...startingPosition];
    let direction: Vector = [...UP];
    let stepResult: [Position, Vector] | undefined = undefined;

    while (
        ((stepResult = step(input, position, direction)),
        stepResult !== undefined)
    ) {
        [position, direction] = stepResult;
        visitedPositions[`${stepResult[0].join(",")}`] = true;
    }

    return Object.keys(visitedPositions).length;
}

export function step(
    input: Input,
    position: Position,
    direction: Vector
): [Position, Vector] | undefined {
    const [y, x] = position;
    const nextY = y + direction[0];
    const nextX = x + direction[1];
    const nextTile = input[nextY]?.[nextX];

    // Stepping over an edge of the input.
    if (nextTile === undefined) return;

    if (nextTile === "#") {
        const nextDirection = getNextDirection(direction);

        input[y][x] = "+";

        return [[y, x], nextDirection];
    }

    if (
        (nextTile === "-" && direction[1] === 0) ||
        (nextTile === "|" && direction[0] === 0)
    ) {
        input[nextY][nextX] = "+";
    } else if (direction[1] === 0) {
        input[nextY][nextX] = "|";
    } else if (direction[0] === 0) {
        input[nextY][nextX] = "-";
    } else {
        throw new Error("Something went horribly wrong!");
    }

    return [[nextY, nextX], direction];
}

function getNextDirection(direction: Vector): Vector {
    if (direction[0] === -1 && direction[1] === 0) {
        return RIGHT;
    } else if (direction[0] === 0 && direction[1] === 1) {
        return DOWN;
    } else if (direction[0] === 1 && direction[1] === 0) {
        return LEFT;
    } else if (direction[0] === 0 && direction[1] === -1) {
        return UP;
    } else {
        throw new Error("Invalid direction!");
    }
}
