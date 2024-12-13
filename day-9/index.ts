type Input = string;
type Blocks = string[];

export async function solveDay9Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-9/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay9Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-9/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart2(input);
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);

    return content.trim();
}

export function convertToBlocks(input: string): Blocks {
    let id = 0;

    const blocks: Blocks = [];

    for (let i = 0; i < input.length; i++) {
        const parsingFileBlocks = i % 2 === 0;

        let remainingBlocks = Number(input[i]);

        if (parsingFileBlocks) {
            while (remainingBlocks-- > 0) {
                blocks.push(`${id}`);
            }

            id++;
        } else {
            while (remainingBlocks-- > 0) {
                blocks.push(".");
            }
        }
    }

    return blocks;
}

export function defrag(blocks: Blocks): Blocks {
    return [];
}

export function solvePart1(input: Input): number {
    return -1;
}

export function solvePart2(input: Input): number {
    return -1;
}
