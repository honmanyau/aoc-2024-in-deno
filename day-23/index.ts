export type Input = string[];
export type ConnectionMap = {
    [computer: string]: { [connectedComputer: string]: true };
};

export async function solveDay23Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-23/input.txt`;
    const input = await readPuzzleInput(path);

    return solvePart1(input);
}

export async function solveDay23Part2(): Promise<string> {
    const path = `${Deno.cwd()}/day-23/input.txt`;
    const input = await readPuzzleInput(path);
    const result = solvePart2(input);

    return result.join(",");
}

export async function readPuzzleInput(path: string): Promise<Input> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines;
}

export function solvePart1(input: Input): number {
    const interconnectedComputers = findInterconnectedComputers(input);

    return interconnectedComputers.filter(
        (computer) => computer.startsWith("t") || computer.match(",t")
    ).length;
}

export function solvePart2(input: Input): string[] {
    const connectionMap = generateConnectionMap(input);
    const computers = Object.keys(connectionMap);
    let groups = computers.map((computer) => [computer]);

    for (let i = 0; groups.length !== 1; i++) {
        const set = new Set<string>();

        for (const computer of computers) {
            for (const group of groups) {
                const interconnected = group.every(
                    (c) => connectionMap[c][computer]
                );

                if (interconnected) {
                    set.add([...group, computer].sort().join(","));
                }
            }
        }

        groups = [...set].map((s) => s.split(","));
    }

    return groups[0].sort();
}

export function generateConnectionMap(input: Input): ConnectionMap {
    const connectionMap: ConnectionMap = {};

    for (const entry of input) {
        const [computer, connectedComputer] = entry.split("-");

        connectionMap[computer] ||= {};
        connectionMap[connectedComputer] ||= {};
        connectionMap[computer][connectedComputer] = true;
        connectionMap[connectedComputer][computer] = true;
    }

    return connectionMap;
}

export function findInterconnectedComputers(input: Input): string[] {
    const connectionMap = generateConnectionMap(input);
    const computers = Object.keys(connectionMap);
    const interconnectedComputers: Set<string> = new Set();

    for (const computer of computers) {
        const connectedComputers = Object.keys(connectionMap[computer]);

        for (const connectedComputer of connectedComputers) {
            const furtherConnectedComputers = Object.keys(
                connectionMap[connectedComputer]
            );

            for (const furtherConnectedComputer of furtherConnectedComputers) {
                if (!connectionMap[computer][furtherConnectedComputer]) {
                    continue;
                }

                interconnectedComputers.add(
                    [computer, connectedComputer, furtherConnectedComputer]
                        .sort()
                        .join(",")
                );
            }
        }
    }

    return Array.from(interconnectedComputers).sort();
}

export function findLargestInterConnectedGroup(
    input: Input,
    computer: string,
    connectionMap = generateConnectionMap(input),
    seen: { [computer: string]: true } = {},
    memo: { [computer: string]: string[] } = {}
): string[] {
    if (!connectionMap[computer] || seen[computer]) return [];

    seen[computer] = true;

    const connectedComputers = Object.keys(connectionMap[computer]).filter(
        (connectedComputer) =>
            Object.keys(seen).every(
                (seenComputer) => connectionMap[seenComputer][connectedComputer]
            )
    );

    let largestConnectedGroup: string[] = [];

    for (const connectedComputer of connectedComputers) {
        const connectedGroup = findLargestInterConnectedGroup(
            input,
            connectedComputer,
            connectionMap,
            { ...seen },
            memo
        );

        if (connectedGroup.length > largestConnectedGroup.length) {
            largestConnectedGroup = connectedGroup;
        }
    }

    return [computer, ...largestConnectedGroup].sort();
}
