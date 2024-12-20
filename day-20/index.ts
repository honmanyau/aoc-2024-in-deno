export type Input = string[][];
export type Position = [number, number];
export type Vector = [number, number];
export type Visited = { [position: string]: { [direction: string]: number } };
export type TrackData = {
    [position: string]: { direction: Vector; picosecondsFromEnd: number };
};

export type State = {
    position: Position;
    direction: Vector;
    tunneled: boolean;
    score: number;
};

export const DIRECTION: { [key: string]: Vector } = {
    UP: [-1, 0],
    RIGHT: [0, 1],
    DOWN: [1, 0],
    LEFT: [0, -1],
};

export const TUNNELLING_VECTOR: Vector[] = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
    [2, 0],
    [-2, 0],
    [0, 2],
    [0, -2],
];

export async function solveDay20Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-20/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay20Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-20/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.split("\n");

    return lines.map((line) => line.split(""));
}

export function solvePart1(input: Input): number {
    let result = 0;

    for (const [picosecondsSavedString, count] of Object.entries(walk(input))) {
        if (Number(picosecondsSavedString) >= 100) {
            result += count;
        }
    }

    return result;
}

export function solvePart2(input: Input, threshold: number = 100): number {
    let result = 0;

    for (const [picosecondsSavedString, count] of Object.entries(walk(input))) {
        if (Number(picosecondsSavedString) >= threshold) {
            result += count;
        }
    }

    return result;
}

export function walk(
    input: Input,
    maxTunnellingPicoseconds = 20
): { [picosecondsSaved: number]: number } {
    const startPosition = findStartPosition(input);
    const trackData = generateTrackData(input);
    const result: { [picosecondsSaved: number]: number } = {};

    let [y, x] = startPosition;

    while (input[y][x] !== "E") {
        const tileTrackData = trackData[keyify([y, x])];

        if (!tileTrackData) {
            throw new Error("Logic error!");
        }

        for (const tunneledPosition of findTunnelPositions(
            input,
            [y, x],
            maxTunnellingPicoseconds
        )) {
            const tunneledTileTrackData = trackData[keyify(tunneledPosition)];
            const picosecondsTunneled =
                Math.abs(tunneledPosition[0] - y) +
                Math.abs(tunneledPosition[1] - x);
            const picosecondsSaved =
                tunneledTileTrackData &&
                tileTrackData.picosecondsFromEnd -
                    tunneledTileTrackData.picosecondsFromEnd -
                    picosecondsTunneled;

            if (picosecondsSaved && picosecondsSaved > 0) {
                result[picosecondsSaved] ||= 0;
                result[picosecondsSaved] += 1;
            }
        }

        input[y][x] = "#";
        [y, x] = getNextTileData(input, [y, x])[0];
    }

    return result;
}

export function generateTrackData(input: Input): TrackData {
    const inputCopy = JSON.parse(JSON.stringify(input));
    const startPosition = findStartPosition(inputCopy);
    const endPosition = findEndPosition(inputCopy);
    const trackData: TrackData = {
        [keyify(endPosition)]: {
            direction: [0, 0],
            picosecondsFromEnd: 0,
        },
    };

    let [y, x] = endPosition;
    let picosecondsFromEnd = 0;

    while (y !== startPosition[0] || x !== startPosition[1]) {
        const [position, direction] = getNextTileData(inputCopy, [y, x], true);

        trackData[keyify(position)] = {
            direction,
            picosecondsFromEnd: ++picosecondsFromEnd,
        };

        inputCopy[y][x] = "#";
        y = position[0];
        x = position[1];
    }

    return trackData;
}

function findStartPosition(input: Input): Position {
    let startPosition: Position | undefined;

    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            if (input[y][x] === "S") {
                startPosition = [y, x] as Position;
                break;
            }
        }

        if (startPosition) break;
    }

    if (!startPosition) {
        throw new Error("Could not find start position!");
    }

    return startPosition;
}

function findEndPosition(input: Input): Position {
    let endPosition: Position | undefined;

    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            if (input[y][x] === "E") {
                endPosition = [y, x] as Position;
                break;
            }
        }

        if (endPosition) break;
    }

    if (!endPosition) {
        throw new Error("Could not find start position!");
    }

    return endPosition;
}

function getNextTileData(
    input: Input,
    position: Position,
    reverse = false
): [Position, Vector] {
    let nextPosition: Position | undefined;
    let nextDirection: Vector | undefined;

    for (const [_direction, vector] of Object.entries(DIRECTION)) {
        const tile = input[position[0] + vector[0]]?.[position[1] + vector[1]];

        if (tile !== "#" && tile !== undefined) {
            nextPosition = [
                position[0] + vector[0],
                position[1] + vector[1],
            ] as Position;

            nextDirection = [...vector];

            if (reverse) {
                nextDirection[0] =
                    nextDirection[0] === 0 ? 0 : nextDirection[0] * -1;
                nextDirection[1] =
                    nextDirection[1] === 0 ? 0 : nextDirection[1] * -1;
            }

            return [nextPosition, nextDirection];
        }
    }

    throw new Error("No next tile found!");
}

function findTunnelPositions(
    input: Input,
    startingPosition: Position,
    maxTunnellingPicoseconds = 20
): Vector[] {
    const [startY, startX] = startingPosition;
    const vectors: Vector[] = [];

    for (
        let dy = -maxTunnellingPicoseconds;
        dy <= maxTunnellingPicoseconds;
        dy++
    ) {
        const nextY = startY + dy;

        for (
            let dx = Math.abs(dy) - maxTunnellingPicoseconds;
            dx <= maxTunnellingPicoseconds - Math.abs(dy);
            dx++
        ) {
            const nextX = startX + dx;

            if (Math.abs(dy) + Math.abs(dx) < 2) continue;

            if (
                input[nextY]?.[nextX] === undefined ||
                input[nextY][nextX] === "#"
            ) {
                continue;
            }

            vectors.push([nextY, nextX]);
        }
    }

    return vectors;
}

function keyify(position: Position | Vector) {
    return `${position.join(",")}`;
}
