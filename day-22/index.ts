export type Input = number[];

export async function solveDay22Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-22/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay22Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-22/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart2(input);
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n").map(Number);

    return lines;
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}

export function mix(secretNumber: number, mixedNumber: number): number {
    return xor53Bit(secretNumber, mixedNumber);
}

function xor53Bit(a: number, b: number) {
    if (a > Number.MAX_SAFE_INTEGER || b > Number.MAX_SAFE_INTEGER) {
        throw new Error("Unsupported operation!");
    }

    const aBinary = a.toString(2).padStart(53, "0");
    const bBinary = b.toString(2).padStart(53, "0");

    let resultBinary = "";

    for (let i = 0; i < aBinary.length; i++) {
        if (aBinary[i] === bBinary[i]) {
            resultBinary += "0";
        } else {
            resultBinary += "1";
        }
    }

    return Number(`0b${resultBinary}`);
}
