export async function solveDay2Part1(): Promise<void> {
    return;
}

export async function solveDay2Part2(): Promise<void> {
    return;
}

export async function readPuzzleInput(path: string): Promise<number[][]> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");

    return lines.map((line) => line.split(/\s+/).map(Number));
}

export function isSafeReport(report: number[]): boolean {
    if (report.length < 2) {
        throw new Error("Report must contain more than one element!");
    }

    if (report[0] === report[1]) return false;

    const ascending = report[0] < report[1];

    for (let i = 0; i < report.length - 2; i++) {
        // Report is unsafe as soon a there is a direction change.
        if (report[i] < report[i + 1] !== ascending) return false;

        const difference = Math.abs(report[i + 1] - report[i]);

        if (difference < 1) return false;
        if (difference > 3) return false;
    }

    return true;
}
