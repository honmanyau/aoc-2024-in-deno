export type Input = number[];
export type ChangesAndPriceMap = { [sequence: string]: number };

export async function solveDay22Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-22/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay22Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-22/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n").map(Number);

    return lines;
}

export function solvePart1(input: Input): number {
    const finalSecretNumbers = input.map((secretNumber) =>
        evolve(secretNumber, 2000)
    );

    return finalSecretNumbers.reduce((a, b) => a + b);
}

export function solvePart2(input: Input): number {
    return -1;
}

export function mix(secretNumber: number, mixedNumber: number): number {
    return xor53Bit(secretNumber, mixedNumber);
}

export function prune(secretNumber: number): number {
    return secretNumber % 16777216;
}

export function evolve(secretNumber: number, iterations = 1) {
    if (iterations === 0) return secretNumber;

    let result = secretNumber;

    result = prune(xor53Bit(result, result * 64));
    result = prune(mix(result, Math.floor(result / 32)));
    result = prune(mix(result, result * 2048));

    return evolve(result, iterations - 1);
}

export function generateChangesAndPriceMap(
    secretNumber: number,
    iterations = 1
): ChangesAndPriceMap {
    const map: ChangesAndPriceMap = {};
    const changes = [];

    let currentNumber = secretNumber;
    let price = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < 4; i++) {
        const nextNumber = evolve(currentNumber);
        const change = (nextNumber % 10) - (currentNumber % 10);

        changes.push(change);
        currentNumber = nextNumber;
        price = nextNumber % 10;
    }

    map[changes.join(",")] = price;

    for (let i = 4; i < iterations; i++) {
        const nextNumber = evolve(currentNumber);
        const change = (nextNumber % 10) - (currentNumber % 10);

        changes.shift();
        changes.push(change);
        currentNumber = nextNumber;
        price = nextNumber % 10;
        map[changes.join(",")] = price;
    }

    return map;
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
