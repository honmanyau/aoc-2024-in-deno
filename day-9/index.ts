type Input = string;
type Blocks = string[];
type FreeSpaceIndex = [number, number][];

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

export function defragByFile(blocks: Blocks): Blocks {
    const defragged = [...blocks];
    let freeSpaceIndex = indexFreeSpace(defragged);

    let i = defragged.length - 1;

    while (i > 0) {
        if (defragged[i] !== ".") {
            const fileEndIndex = i;
            const fileId = defragged[i];

            while (defragged[i - 1] === fileId) {
                i--;
            }

            const spaceRequired = fileEndIndex - i + 1;

            for (let j = 0; j < freeSpaceIndex.length; j++) {
                const [startIndex, freeSpace] = freeSpaceIndex[j];

                if (freeSpace >= spaceRequired && startIndex < i) {
                    for (let j = 0; j < spaceRequired; j++) {
                        defragged[startIndex + j] = fileId;
                        defragged[i + j] = ".";
                    }

                    freeSpaceIndex = indexFreeSpace(defragged);

                    break;
                }
            }
        }

        i--;
    }

    return defragged;
}

export function indexFreeSpace(blocks: Blocks): FreeSpaceIndex {
    const freeSpaceIndex: FreeSpaceIndex = [];

    let i = 0;
    let contiguousFreeSpace = 0;

    while (i <= blocks.length) {
        if (blocks[i] !== ".") {
            if (contiguousFreeSpace > 0) {
                freeSpaceIndex.push([
                    i - contiguousFreeSpace,
                    contiguousFreeSpace,
                ]);
            }

            contiguousFreeSpace = 0;
        } else {
            contiguousFreeSpace++;
        }

        i++;
    }

    return freeSpaceIndex;
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
    const blocks = convertToBlocks(input);
    const defragged = defragByFile(blocks);

    let checksum = 0;

    for (let i = 0; i < defragged.length; i++) {
        if (defragged[i] === ".") continue;

        checksum += Number(defragged[i]) * i;
    }

    return checksum;
}
