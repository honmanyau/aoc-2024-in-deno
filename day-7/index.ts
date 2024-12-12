type Input = string[][];

export async function solveDay7Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-7/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay7Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-7/input.txt`;
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

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}

export function evaluate(line: string): boolean {
    const matched = line.match(/^(\d+?): (.+$)/);

    if (!matched) throw new Error(`Potentially incorrect parsing of equation!`);

    const value = Number(matched[1]);
    const operands = matched[2].split(" ").map(Number);
    const equations = [];

    throw new Error("Not implemented!");
}

export function constructEquations(
    operands: number[],
    equations: string[] = []
): string[] {
    if (operands.length === 0) {
        return equations;
    }

    const nextEquations = [];

    if (equations.length === 0) {
        const [a, b] = operands.splice(0, 2);

        nextEquations.push(`${a} + ${b}`, `${a} * ${b}`);
    } else {
        const operand = operands.shift();

        for (const equation of equations) {
            nextEquations.push(
                `${equation} + ${operand}`,
                `${equation} * ${operand}`
            );
        }
    }

    return constructEquations(operands, nextEquations);
}
