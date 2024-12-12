type Input = string[];
type Equation = (string | number)[];

export async function solveDay7Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-7/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay7Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-7/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);

    return content.trim().split("\n");
}

export function solvePart1(input: Input): number {
    let result = 0;

    for (const line of input) {
        const linerResult = evaluate(line);

        if (linerResult !== undefined) {
            result += linerResult;
        }
    }

    return result;
}

export function solvePart2(input: Input): number {
    return -1;
}

export function evaluate(
    line: string,
    concat: boolean = false
): number | undefined {
    const matched = line.match(/^(\d+?): (.+$)/);

    if (!matched) throw new Error(`Potentially incorrect parsing of equation!`);

    const value = Number(matched[1]);
    const operands = matched[2].split(" ").map(Number);
    const equations = constructEquations(operands);

    const validEquationFound = equations.some((equation) => {
        let result = equation.shift();

        if (typeof result !== "number") {
            throw new Error("Invalid operand!");
        }

        while (equation.length > 0) {
            const operator = equation.shift();
            const operand = equation.shift();

            if (typeof operand !== "number") {
                throw new Error("Invalid operand!");
            }

            if (operator === "+") result += operand;
            if (operator === "*") result *= operand;

            if (operator === "||") {
                if (!concat) return false;

                result = Number(`${result}${operand}`);
            }
        }

        return result === value;
    });

    if (!validEquationFound) return;

    return value;
}

export function constructEquations(
    operands: number[],
    equations: Equation[] = []
): Equation[] {
    if (operands.length === 0) {
        return equations;
    }

    const nextEquations: Equation[] = [];

    if (equations.length === 0) {
        const [a, b] = operands.splice(0, 2);

        nextEquations.push([a, "+", b], [a, "*", b], [a, "||", b]);
    } else {
        const operand = operands.shift();

        if (!operand) throw new Error("Missing operand!");

        for (const equation of equations) {
            nextEquations.push(
                [...equation, "+", operand],
                [...equation, "*", operand],
                [...equation, "||", operand]
            );
        }
    }

    return constructEquations(operands, nextEquations);
}
