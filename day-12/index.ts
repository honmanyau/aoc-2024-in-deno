type Input = string[][];
type Region = [string, number, number];
type Position = [number, number];
type Vector = Up | Down | Left | Right;
type Up = [-1, 0];
type Down = [1, 0];
type Left = [0, -1];
type Right = [0, 1];

const UP: Up = [-1, 0];
const DOWN: Down = [1, 0];
const LEFT: Left = [0, -1];
const RIGHT: Right = [0, 1];

export async function solveDay12Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-12/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay12Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-12/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);

    return content
        .trim()
        .split("\n")
        .map((line) => line.split(""));
}

export function findRegions(input: Input): Region[] {
    return [];
}

export function findRegion(
    input: Input,
    startingPosition: Position
): [Region, Set<string>] {
    const queue: Position[] = [startingPosition];
    const visited = new Set<string>();
    const startingLetter = input[startingPosition[0]][startingPosition[1]];
    const offsets: Vector[] = [UP, DOWN, LEFT, RIGHT];

    let area = 0;
    let perimeter = 0;

    while (queue.length > 0) {
        const [y, x] = queue.shift()!;

        if (visited.has(keyify([y, x]))) continue;

        for (const offset of offsets) {
            const nextY = y + offset[0];
            const nextX = x + offset[1];
            const letter = input[nextY]?.[nextX];

            if (letter === undefined) continue;
            if (letter !== startingLetter) continue;

            perimeter -= 1;

            if (visited.has(keyify([nextY, nextX]))) continue;

            queue.push([nextY, nextX]);
        }

        area += 1;
        perimeter += 4;
        visited.add(keyify([y, x]));
    }

    return [[startingLetter, area, perimeter], visited];
}

function keyify(position: Position): string {
    return position.join(",");
}
