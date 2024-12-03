export async function solveDay3Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-3/input.txt`;
    const input = await readPuzzleInput(path);
    const multiplicands = findMuls(input);

    return calculateSumOfProducts(multiplicands);
}

export async function solveDay3Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-3/input.txt`;
    const input = await readPuzzleInput(path);
    const multiplicands = findMulsPart2(input);

    return calculateSumOfProducts(multiplicands);
}

export async function readPuzzleInput(path: string): Promise<string> {
    const content = await Deno.readTextFile(path);

    return content.trim();
}

export function findMuls(input: string): [number, number][] {
    const instructions = input.match(/mul\([0-9]{1,3},[0-9]{1,3}\)/g);

    if (!instructions) return [];

    return instructions.map((instruction) => {
        const matched = instruction.match(/^mul\(([0-9]{1,3}),([0-9]{1,3})\)$/);

        if (!matched) throw new Error(`Invalid instruction: ${instruction}`);

        return [Number(matched[1]), Number(matched[2])];
    });
}

export function findMulsPart2(input: string): [number, number][] {
    const instructions = input.match(
        /(mul\([0-9]{1,3},[0-9]{1,3}\))|do\(\)|don't\(\)/g
    );

    if (!instructions) return [];

    const multiplicands: [number, number][] = [];

    let enabled = true;

    for (const instruction of instructions) {
        if (instruction === "do()") enabled = true;
        if (instruction === "don't()") enabled = false;

        const matched = instruction.match(/^mul\(([0-9]{1,3}),([0-9]{1,3})\)$/);

        if (enabled && matched) {
            multiplicands.push([Number(matched[1]), Number(matched[2])]);
        }
    }

    return multiplicands;
}

export function calculateSumOfProducts(input: [number, number][]): number {
    return input.reduce(
        (sum, instruction) => sum + instruction[0] * instruction[1],
        0
    );
}
