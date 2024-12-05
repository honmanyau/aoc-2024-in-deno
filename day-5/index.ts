export async function solveDay5Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-5/input.txt`;
    const [rules, updates] = await readPuzzleInput(path);

    return -1;
}

export async function solveDay5Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-5/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

type Rules = { [page1: number]: { [page2: number]: true } };

export async function readPuzzleInput(
    path: string
): Promise<[Rules, number[][]]> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");
    const rules: Rules = {};
    const updates: number[][] = [];

    let parsingRules = true;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (parsingRules) {
            const match = line.match(/^([0-9]+)\|([0-9]+)$/);

            if (!match) {
                parsingRules = false;
                continue;
            }

            if (!rules[Number(match[1])]) rules[Number(match[1])] = {};

            rules[Number(match[1])][Number(match[2])] = true;
        } else {
            updates.push(line.split(",").map(Number));
        }
    }

    return [rules, updates];
}

export function isValidUpdate(rules: Rules, update: number[]): boolean {
    for (let i = 0; i < update.length; i++) {
        for (let x = i + 1; x < update.length; x++) {
            if (
                !rules[update[i]]?.[update[x]] &&
                rules[update[x]]?.[update[i]]
            ) {
                return false;
            }
        }
    }

    return true;
}

export function solvePart1(rules: Rules, updates: number[][]): number {
    return -1;
}
