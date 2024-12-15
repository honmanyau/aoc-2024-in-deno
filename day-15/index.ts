export type InputMap = string[][];
export type Input = [InputMap, Position, string];
export type Position = [number, number];
export type Vector = [number, number];

export async function solveDay15Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-15/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay15Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-15/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export function step(
    map: InputMap,
    position: Position,
    instruction: string
): Promise<Position> {
    throw new Error("Not implemented!");
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const [protoMap, instructions] = content.trim().split("\n\n");
    const map = protoMap.split("\n").map((line) => line.split(""));

    let robotPosition: Position | undefined = undefined;

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[0].length; x++) {
            if (map[y][x] === "@") {
                robotPosition = [y, x];
            }
        }
    }

    if (!robotPosition) throw new Error("Robot not found!");

    return [map, robotPosition, instructions];
}
