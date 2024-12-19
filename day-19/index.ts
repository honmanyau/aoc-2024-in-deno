export type Input = [Colors, string[]];

export type Colors = { [color: string]: boolean };

export async function solveDay19Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-19/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay19Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-19/input.txt`;
    const input = await readPuzzleInput(path);
    const result = solvePart2(input);

    return -1;
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const [colorStrings, towelStrings] = content.trim().split("\n\n");
    const colors: Colors = {};

    for (const color of colorStrings.replaceAll(/\s/g, "").split(",")) {
        colors[color] = true;
    }

    return [colors, towelStrings.trim().split("\n")];
}

/**
 * @deprecated Super naive BFS implementation that doesn't scale at all for the
 * real input.
 */
export function buildTowel(colors: Colors, towel: string): string[][] {
    const combinations: string[][] = [];
    const queue: [string, string[]][] = [[towel, []]];

    while (queue.length > 0) {
        const [fragment, combination] = queue.shift()!;

        for (let i = 1; i <= fragment.length; i++) {
            const color = fragment.slice(0, i);

            if (colors[color]) {
                const nextFragment = fragment.slice(i);
                const nextCombination = [...combination, color];

                if (nextFragment === "") {
                    combinations.push(nextCombination);
                } else {
                    queue.push([nextFragment, nextCombination]);
                }
            }
        }
    }

    return combinations;
}

export function canBuildTowel(colors: Colors, fragment: string): boolean {
    if (fragment.length === 0) return true;

    for (let i = 0; i < fragment.length; i++) {
        const color = fragment.slice(0, i + 1);
        const nextFragment = fragment.slice(i + 1);

        if (colors[color] && canBuildTowel(colors, nextFragment)) {
            return true;
        }
    }

    return false;
}

export function findValidStartingColors(
    colors: Colors,
    towel: string
): string[] {
    const validStartingColors: string[] = [];

    for (let i = 0; i < towel.length; i++) {
        const color = towel.slice(0, i + 1);

        if (!colors[color]) continue;

        validStartingColors.push(color);
    }

    return validStartingColors;
}

export function getNumberOfCombinations(colors: Colors, towel: string): number {
    const terminalIndex = towel.length - 1;
    const allTerminationCounts: number[] = Array(towel.length).fill(0);

    for (let i = towel.length - 1; i >= 0; i--) {
        const validStartingColors = findValidStartingColors(
            colors,
            towel.slice(i)
        );

        for (const validStartingColor of validStartingColors) {
            const lookAheadIndex = i + validStartingColor.length - 1;

            if (lookAheadIndex === terminalIndex) {
                allTerminationCounts[i] += 1;
            } else {
                allTerminationCounts[i] +=
                    allTerminationCounts[lookAheadIndex + 1];
            }
        }
    }

    return allTerminationCounts[0];
}

export function solvePart1(input: Input): number {
    const [colors, towels] = input;

    return towels.map((towel) => canBuildTowel(colors, towel)).filter((b) => b)
        .length;
}

export function solvePart2(input: Input): number {
    return -1;
}
