export async function solveDay5Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-5/input.txt`;
    const [rules, updates] = await readPuzzleInput(path);

    return solvePart1(rules, updates);
}

export async function solveDay5Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-5/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

type Rules = { [page1: number]: { [page2: number]: true } };
type Violations = { [before: number]: { [after: number]: true } };

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

export function findRuleViolations(rules: Rules, update: number[]): Violations {
    const violations: Violations = {};

    for (let i = 0; i < update.length; i++) {
        for (let x = i + 1; x < update.length; x++) {
            if (
                !rules[update[i]]?.[update[x]] &&
                rules[update[x]]?.[update[i]]
            ) {
                if (!violations[update[x]]) {
                    violations[update[x]] = {};
                }

                violations[update[x]][update[i]] = true;
            }
        }
    }

    return violations;
}

export function isValidUpdate(rules: Rules, update: number[]): boolean {
    const violations = findRuleViolations(rules, update);

    return Object.keys(violations).length === 0;
}

export function fixInvalidUpdate(
    violations: Violations,
    update: number[]
): number[] {
    let fixed: number[] = [];

    for (const entry of update) {
        if (violations[entry] !== undefined) continue;

        fixed.push(entry);
    }

    for (const [numToInsert, numsThatFollow] of Object.entries(violations)) {
        for (let i = 0; i < fixed.length; i++) {
            const entry = fixed[i];

            if (numsThatFollow[entry] === true) {
                fixed = [
                    ...fixed.slice(0, i),
                    Number(numToInsert),
                    ...fixed.slice(i),
                ];

                break;
            }
        }
    }

    return fixed;
}

export function solvePart1(rules: Rules, updates: number[][]): number {
    let sum = 0;

    for (const update of updates) {
        if (isValidUpdate(rules, update)) {
            sum += update[Math.floor(update.length / 2)];
        }
    }

    return sum;
}