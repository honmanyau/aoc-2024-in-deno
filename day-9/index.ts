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

    return -1;
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
    const defragged = [...blocks];

    let i = 0;
    let j = defragged.length - 1;

    while (i < j) {
        if (defragged[i] !== ".") {
            i++;
            continue;
        }

        if (defragged[j] === ".") {
            j--;
            continue;
        }

        if (defragged[i] === "." && defragged[j] !== ".") {
            [defragged[i], defragged[j]] = [defragged[j], defragged[i]];
        }
    }

    return defragged;
}

export function solvePart1(input: Input): number {
    const blocks = convertToBlocks(input);
    const defragged = defrag(blocks);

    let checksum = 0;

    for (let i = 0; i < defragged.length; i++) {
        if (defragged[i] === ".") break;

        checksum += Number(defragged[i]) * i;
    }

    return checksum;
}

export function solvePart2(input: Input): number {
    return -1;
}
