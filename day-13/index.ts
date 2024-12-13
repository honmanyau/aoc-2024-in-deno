type Input = [Vector, Vector, Position][];
type Position = [number, number];
type Vector = [number, number];

export async function solveDay13Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-13/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay13Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-13/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart2(input);
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const buttonALines = content.match(/Button A:.+/g);
    const buttonBLines = content.match(/Button B:.+/g);
    const prizeLines = content.match(/Prize:.+/g);
    const input: Input = [];

    if (
        !buttonALines ||
        !buttonBLines ||
        !prizeLines ||
        buttonALines.length !== buttonBLines.length ||
        buttonALines.length !== prizeLines.length
    ) {
        throw new Error("Parsing error encountered!");
    }

    for (let i = 0; i < buttonALines.length; i++) {
        const buttonAMatched = buttonALines[i].match(
            /^Button A: X(.+), Y(.+)$/
        );

        const buttonBMatched = buttonBLines[i].match(
            /^Button B: X(.+), Y(.+)$/
        );

        const prizeMatched = prizeLines[i].match(/^Prize: X=(.+), Y=(.+)$/);

        if (!buttonAMatched || !buttonBMatched || !prizeMatched) {
            throw new Error("Parsing error encountered!");
        }

        input.push([
            [Number(buttonAMatched[1]), Number(buttonAMatched[2])] as Vector,
            [Number(buttonBMatched[1]), Number(buttonBMatched[2])] as Vector,
            [Number(prizeMatched[1]), Number(prizeMatched[2])] as Position,
        ]);
    }

    return input;
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
