export type Input = [number, number][];
export type Grid = ("." | "#")[][];
export type Position = [number, number];
export type Vector = [number, number];
export type Visited = { [position: string]: { [direction: string]: number } };
export type State = {
    position: Position;
    direction: Vector;
    score: number;
};

export const DIRECTION: { [key: string]: Vector } = {
    UP: [-1, 0],
    RIGHT: [0, 1],
    DOWN: [1, 0],
    LEFT: [0, -1],
};

export async function solveDay18Part1(): Promise<number | undefined> {
    const path = `${Deno.cwd()}/day-18/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay18Part2(): Promise<number> {
    const results = await solvePart2();

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines.map(
        (v) => v.split(",").map(Number).reverse() as [number, number]
    );
}

export function solvePart1(
    input: Input,
    steps = 1024,
    gridSize = 71
): number | undefined {
    const grid = simulate(input, steps, gridSize);
    const visited: Visited = {};
    const queue: State[] = [
        {
            position: [0, 0],
            direction: DIRECTION.UP,
            score: 0,
        },
        {
            position: [0, 0],
            direction: DIRECTION.DOWN,
            score: 0,
        },
        {
            position: [0, 0],
            direction: DIRECTION.LEFT,
            score: 0,
        },
        {
            position: [0, 0],
            direction: DIRECTION.RIGHT,
            score: 0,
        },
    ];

    const finalStates: State[] = [];

    while (queue.length > 0) {
        const state = queue.shift()!;
        const positionKey = keyify(state.position);
        const directionKey = keyify(state.direction);

        if (!visited[positionKey]) {
            visited[positionKey] = {};
        }

        const prevScore = visited[positionKey][directionKey];

        if (prevScore === undefined || prevScore > state.score) {
            visited[positionKey][directionKey] = state.score;
        } else {
            continue;
        }

        const [y, x] = state.position;
        const [dy, dx] = state.direction;
        const nextY = y + dy;
        const nextX = x + dx;
        const nextTile = grid[nextY]?.[nextX];

        if (nextY === gridSize - 1 && nextX === gridSize - 1) {
            finalStates.push({
                position: [nextY, nextX],
                direction: state.direction,
                score: state.score + 1,
            });
            continue;
        } else if (nextTile !== undefined && nextTile !== "#") {
            // Just let the next iteration filter out the ones that have
            // already been seen. We can optimise it later if needed.
            queue.push(
                {
                    position: [nextY, nextX],
                    direction: DIRECTION.UP,
                    score: state.score + 1,
                },
                {
                    position: [nextY, nextX],
                    direction: DIRECTION.DOWN,
                    score: state.score + 1,
                },
                {
                    position: [nextY, nextX],
                    direction: DIRECTION.LEFT,
                    score: state.score + 1,
                },
                {
                    position: [nextY, nextX],
                    direction: DIRECTION.RIGHT,
                    score: state.score + 1,
                }
            );
        }
    }

    if (finalStates.length === 0) return;

    return Math.min(...finalStates.map((state) => state.score));
}

export function solvePart2(
    input: Input,
    steps = 1024,
    gridSize = 71
): string | undefined {
    for (let i = steps; i < input.length; i++) {
        if (solvePart1(input, i, gridSize) === undefined) {
            return input[i - 1].reverse().join(",");
        }
    }

    throw new Error("No solutions found!");
}

export function simulate(
    input: Input,
    steps: number,
    gridSize: number = 71
): Grid {
    const grid: Grid = [];

    for (let i = 0; i < gridSize; i++) {
        grid.push(Array(gridSize).fill("."));
    }

    for (let i = 0; i < steps; i++) {
        const [y, x] = input[i];

        grid[y][x] = "#";
    }

    return grid;
}

function keyify(position: Position | Vector) {
    return `${position.join(",")}`;
}
