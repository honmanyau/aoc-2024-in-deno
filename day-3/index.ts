export async function solveDay3Part1(): Promise<void> {
    return;
}

export async function solveDay3Part2(): Promise<void> {
    return;
}

export async function readPuzzleInput(path: string): Promise<string> {
    const content = await Deno.readTextFile(path);

    return content.trim();
}

export function findMuls(input: string): [number, number][] {
    const instructions = input.match(/mul\([0-9]{1,3},[0-9]{1,3}\)/g);

    if (!instructions) return [];

    return instructions.map((instruction) => {
        const matched = instruction.match(/mul\(([0-9]{1,3}),([0-9]{1,3})\)/);

        if (!matched) throw new Error(`Invalid instruction: ${instruction}`);

        return [Number(matched[1]), Number(matched[2])];
    });
}

export function calculateSumOfProducts(input: [number, number][]): number {
    return input.reduce(
        (sum, instruction) => sum + instruction[0] * instruction[1],
        0
    );
}
