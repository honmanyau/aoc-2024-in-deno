export type Input = [Position, Vector][];
export type Position = [number, number];
export type Vector = [number, number];

export async function solveDay14Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-14/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay14Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-14/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart2(input);
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines.map((line) => {
        const match = line.match(/p=(.+) v=(.+)/);

        if (!match) throw new Error(`Invalid line parsing logic!`);

        const position = match[1].split(",").map(Number).reverse() as Position;
        const velocity = match[2].split(",").map(Number).reverse() as Vector;

        return [position, velocity];
    });
}

export function step(
    position: Position,
    velocity: Vector,
    numberOfSteps: number,
    grid: Vector = [103, 101]
): Position {
    const [y, x] = position;
    const dy = velocity[0] * numberOfSteps;
    const dx = velocity[1] * numberOfSteps;
    const finalY = (((y + dy) % grid[0]) + grid[0]) % grid[0];
    const finalX = (((x + dx) % grid[1]) + grid[1]) % grid[1];

    return [finalY, finalX];
}

export function countQuadrants(
    positions: Position[],
    grid: Vector = [103, 101]
): [number, number, number, number] {
    const halfY = (grid[0] - 1) / 2;
    const halfX = (grid[1] - 1) / 2;
    let topLeft = 0;
    let topRight = 0;
    let bottomLeft = 0;
    ``;
    let bottomRight = 0;

    for (const [y, x] of positions) {
        if (y < halfY) {
            if (x < halfX) {
                topLeft++;
            } else if (x > halfX) {
                topRight++;
            }
        } else if (y > halfY) {
            if (x < halfX) {
                bottomLeft++;
            } else if (x > halfX) {
                bottomRight++;
            }
        }
    }

    return [topLeft, topRight, bottomLeft, bottomRight];
}

export function solvePart1(input: Input, grid: Vector = [103, 101]): number {
    const positions = input.map(([position, velocity]) =>
        step(position, velocity, 100, grid)
    );

    const counts = countQuadrants(positions, grid);

    return counts.reduce((acc, val) => acc * val);
}

export function solvePart2(input: Input): number {
    let steps = 0;

    while (true) {
        const seen: { [position: string]: true } = {};

        let easterEggFound = true;

        for (const [position, velocity] of input) {
            const newPosition = step(position, velocity, steps);
            const key = newPosition.join(",");

            if (seen[key]) {
                easterEggFound = false;
                break;
            }

            seen[key] = true;
        }

        if (easterEggFound) {
            break;
        }

        steps++;
    }

    plot(input.map(([position, velocity]) => step(position, velocity, steps)));

    return steps;
}

function plot(positions: Position[]) {
    const grid = Array.from({ length: 103 }).map(() =>
        Array.from({ length: 101 }).fill(".")
    );

    for (const position of positions) {
        grid[position[0]][position[1]] = "#";
    }

    console.log(grid.map((row) => row.join("")).join("\n"));
}
