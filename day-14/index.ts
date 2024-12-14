export type Input = [Position, Vector][];
export type Position = [number, number];
export type Vector = [number, number];

export async function solveDay14Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-14/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay14Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-14/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
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
    grid: Vector = [101, 103]
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
    grid: Vector = [101, 103]
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

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
