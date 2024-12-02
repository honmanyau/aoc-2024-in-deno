export async function solveDay2Part1(): Promise<number> {
    const path = `${Deno.cwd()}/day-2/input.txt`;
    const input = await readPuzzleInput(path);

    let safeReportCount = 0;

    for (const report of input) {
        if (isSafeReport(report)) safeReportCount++;
    }

    return safeReportCount;
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

    for (let i = 0; i < report.length - 1; i++) {
        // Report is unsafe as soon a there is a direction change.
        if (report[i] < report[i + 1] !== ascending) return false;

        const difference = Math.abs(report[i + 1] - report[i]);

        if (difference < 1) return false;
        if (difference > 3) return false;
    }

    return true;
}
