export type Input = string[];
export type Registers = {
    A: number;
    B: number;
    C: number;
};

export type Program = [string, number][];

export async function solveDay17Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-17/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay17Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-17/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(
    path: string
): Promise<[Registers, Program]> {
    const content = await Deno.readTextFile(path);
    const [registersText, programText] = content.split("\n\n");
    const registers: Registers = {
        A: Number(registersText.match(/Register A: (\d+)/)![1]),
        B: Number(registersText.match(/Register B: (\d+)/)![1]),
        C: Number(registersText.match(/Register C: (\d+)/)![1]),
    };
    const program = programText
        .replace(/^Program: /, "")
        .trim()
        .split(",")
        .reduce((acc, val, i, arr) => {
            if (i % 2 === 0) {
                acc.push([val, Number(arr[i + 1])]);
            }

            return acc;
        }, [] as Program);

    return [registers, program];
}

export function getComboOperandValue(
    registers: Registers,
    operand: number
): number {
    if (operand >= 0 && operand <= 3) {
        return operand;
    } else if (operand === 4) {
        return registers.A;
    } else if (operand === 5) {
        return registers.B;
    } else if (operand === 6) {
        return registers.C;
    }

    throw new Error("Not implemented");
}

export function adv(registers: Registers, operand: number): void {
    const operandValue = getComboOperandValue(registers, operand);
    const denominator = 2 ** operandValue;
    const quotient = registers.A / denominator;

    registers.A = Math.floor(quotient);
}

export function bxl(registers: Registers, operand: number): void {
    registers.B = registers.B ^ operand;
}

export function bst(registers: Registers, operand: number): void {
    const operandValue = getComboOperandValue(registers, operand);

    registers.B = operandValue % 8;
}

export function bxc(registers: Registers, _operand: number): void {
    registers.B = registers.B ^ registers.C;
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
