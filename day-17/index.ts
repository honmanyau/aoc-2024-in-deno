export type Input = [Registers, number[]];
export type Registers = {
    A: number;
    B: number;
    C: number;
};

export async function solveDay17Part1(): Promise<string> {
    const path = `${Deno.cwd()}/day-17/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay17Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-17/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(
    path: string
): Promise<[Registers, number[]]> {
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
        .map(Number);

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

export function bdv(registers: Registers, operand: number): void {
    const operandValue = getComboOperandValue(registers, operand);
    const denominator = 2 ** operandValue;
    const quotient = registers.A / denominator;

    registers.B = Math.floor(quotient);
}

export function cdv(registers: Registers, operand: number): void {
    const operandValue = getComboOperandValue(registers, operand);
    const denominator = 2 ** operandValue;
    const quotient = registers.A / denominator;

    registers.C = Math.floor(quotient);
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

export function out(registers: Registers, operand: number): number {
    const operandValue = getComboOperandValue(registers, operand);

    return operandValue % 8;
}

export function run(registers: Registers, program: number[]): string {
    let pointer = 0;
    let outputs = [];

    while (pointer < program.length) {
        const opCode = Number(program[pointer]);
        const operand = Number(program[pointer + 1]);

        if (opCode === 3) {
            if (registers.A === 0) {
                pointer += 2;
            } else {
                pointer = operand;
            }

            continue;
        }

        if (opCode === 0) {
            adv(registers, operand);
        } else if (opCode === 1) {
            bxl(registers, operand);
        } else if (opCode === 2) {
            bst(registers, operand);
        } else if (opCode === 4) {
            bxc(registers, operand);
        } else if (opCode === 5) {
            outputs.push(out(registers, operand));
        } else if (opCode === 6) {
            bdv(registers, operand);
        } else if (opCode === 7) {
            cdv(registers, operand);
        }

        pointer += 2;
    }

    return outputs.join(",");
}

export function solvePart1(input: Input): string {
    const [registers, program] = input;

    return run(registers, program);
}

export function solvePart2(input: Input): number {
    const [registers, program] = input;

    let result = 0;

    while (run({ ...registers, A: result }, program) !== program.join(",")) {
        result++;
    }

    return result;
}
