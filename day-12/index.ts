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

    return solvePart1(input);
}

export async function solveDay12Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-12/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart2(input);
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);

    return content
        .trim()
        .split("\n")
        .map((line) => line.split(""));
}

export function solvePart1(input: Input): number {
    const regions = findRegions(input);

    let price = 0;

    for (const [_letter, area, perimeter] of regions) {
        price += area * perimeter;
    }

    return price;
}

export function solvePart2(input: Input): number {
    const height = input.length;
    const width = input[0].length;
    const visited = new Set<string>();

    let price = 0;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (visited.has(keyify([y, x]))) continue;

            const [region, regionVisited] = findRegion(input, [y, x]);
            const sides = getSides(regionVisited);

            price += region[1] * sides;

            regionVisited.forEach((key) => visited.add(key));
        }
    }

    return price;
}

export function findRegions(input: Input): Region[] {
    const height = input.length;
    const width = input[0].length;
    const regions = [];
    const visited = new Set<string>();

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (visited.has(keyify([y, x]))) continue;

            const [region, regionVisited] = findRegion(input, [y, x]);

            regions.push(region);
            regionVisited.forEach((key) => visited.add(key));
        }
    }

    return regions;
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

export function getVertices(position: Position): string[] {
    const [y, x] = position;
    const top: Position = [y - 1, x];
    const bottom: Position = [y + 1, x];
    const left: Position = [y, x - 1];
    const right: Position = [y, x + 1];
    const topLeft: Position = [y - 1, x - 1];
    const topRight: Position = [y - 1, x + 1];
    const bottomLeft: Position = [y + 1, x - 1];
    const bottomRight: Position = [y + 1, x + 1];

    const topLeftVertexSignature = [position, topLeft, top, left].sort(
        sortYthenX
    );
    const topRigbhtVertexSignature = [position, topRight, top, right].sort(
        sortYthenX
    );
    const bottomLeftVertexSignature = [position, bottomLeft, bottom, left].sort(
        sortYthenX
    );
    const bottomRightVertexSignature = [
        position,
        bottomRight,
        bottom,
        right,
    ].sort(sortYthenX);

    return [
        topLeftVertexSignature.map(keyify).join("|"),
        topRigbhtVertexSignature.map(keyify).join("|"),
        bottomLeftVertexSignature.map(keyify).join("|"),
        bottomRightVertexSignature.map(keyify).join("|"),
    ];
}

export function getSides(positions: Set<string>): number {
    const allVertices: { [vertex: string]: boolean } = {};

    for (const positionString of positions.values()) {
        const [y, x] = positionString.split(",").map(Number);
        const vertices = getVertices([y, x]);

        for (const vertex of vertices) {
            if (allVertices[vertex] === undefined) {
                allVertices[vertex] = false;
            }

            allVertices[vertex] = !allVertices[vertex];
        }
    }

    let sharedVertexCount = 0;

    for (const vertex in allVertices) {
        if (allVertices[vertex] === true) continue;

        const [topLeft, topRight, bottomLeft, bottomRight] = vertex.split("|");

        if (
            (positions.has(topLeft) &&
                positions.has(bottomRight) &&
                !positions.has(topRight) &&
                !positions.has(bottomLeft)) ||
            (positions.has(topRight) &&
                positions.has(bottomLeft) &&
                !positions.has(topLeft) &&
                !positions.has(bottomRight))
        ) {
            sharedVertexCount += 2;
        }
    }

    return (
        Object.entries(allVertices).filter(([_key, value]) => value).length +
        sharedVertexCount
    );
}

function keyify(position: Position): string {
    return position.join(",");
}

function sortYthenX(a: Position, b: Position): number {
    return a[0] - b[0] || a[1] - b[1];
}
