type Input = string[];

export async function solveDay11Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-11/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay11Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-11/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart2(input);
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);

    return content.trim().split(" ");
}

export function blink(stones: Input): Input {
    const newStones: Input = [];

    for (const stone of stones) {
        newStones.push(...atomicBlink(stone));
    }

    return newStones;
}

export function atomicBlink(stone: string): string[] {
    if (stone === "0") {
        return ["1"];
    } else if (stone.length % 2 === 0) {
        const halfSize = stone.length / 2;
        const leftStone = stone.slice(0, halfSize);
        const rightStone = String(Number(stone.slice(halfSize)));

        return [leftStone, rightStone];
    }

    return [String(Number(stone) * 2024)];
}

export function solvePart1(input: Input): number {
    let result = input;

    for (let i = 0; i < 25; i++) {
        result = blink(result);
    }

    return result.length;
}

export function solvePart2(input: Input): number {
    return -1;
}
