export async function solveDay1Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-1/input.txt`;
    const input = await readPuzzleInput(path);

    return calculateDistance(input);
}

export async function solveDay1Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-1/input.txt`;
    const input = await readPuzzleInput(path);

    return calculateSimilarityScore(input);
}

export function createDictionary(input: number[]): { [key: number]: number } {
    const dictionary: { [key: number]: number } = {};

    for (const entry of input) {
        if (dictionary[entry] === undefined) {
            dictionary[entry] = 0;
        }

        dictionary[entry] += 1;
    }

    return dictionary;
}

export function calculateDistance(input: [number[], number[]]): number {
    const locationIds1 = [...input[0]].sort();
    const locationIds2 = [...input[1]].sort();

    let sum = 0;

    for (let i = 0; i < locationIds1.length; i++) {
        sum += Math.abs(locationIds1[i] - locationIds2[i]);
    }

    return sum;
}

export function calculateSimilarityScore(input: [number[], number[]]): number {
    const dictionary = createDictionary(input[1]);

    let score = 0;

    for (const entry of input[0]) {
        score += entry * Number(dictionary[entry] ?? 0);
    }

    return score;
}

export async function readPuzzleInput(
    path: string
): Promise<[number[], number[]]> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");
    const locationIds1: number[] = [];
    const locationIds2: number[] = [];

    for (const line of lines) {
        const locationIds = line.split(/\s+/);

        locationIds1.push(Number(locationIds[0]));
        locationIds2.push(Number(locationIds[1]));
    }

    return [locationIds1, locationIds2];
}
