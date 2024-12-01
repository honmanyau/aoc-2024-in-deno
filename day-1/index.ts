export function solve() {
    return;
}

export async function readPuzzleInput(
    path: string
): Promise<[number[], number[]]> {
    const content = await Deno.readTextFile(path);
    const lines = content.trim().split("\n");
    const locationIds1: number[] = [];
    const locationIds2: number[] = [];

    for (const line of lines) {
        const locationIds = line.split(/\s+/);

        locationIds1.push(Number(locationIds[0]));
        locationIds2.push(Number(locationIds[1]));
    }

    return [locationIds1.sort(), locationIds2.sort()];
}
