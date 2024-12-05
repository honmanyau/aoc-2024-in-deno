export async function solveDay5Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-5/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function solveDay5Part2(): Promise<number> {
    const path = `${Deno.cwd()}/day-5/input.txt`;
    const input = await readPuzzleInput(path);

    return -1;
}

export async function readPuzzleInput(
    path: string
): Promise<[[number, number][], number[][]]> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");
    const rules: [number, number][] = [];
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

            rules.push([Number(match[1]), Number(match[2])]);
        } else {
            updates.push(line.split(",").map(Number));
        }
    }

    return [rules, updates];
}
