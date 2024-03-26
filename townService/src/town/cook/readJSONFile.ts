import { readFile } from 'fs/promises';
import { join } from 'path';

export async function readJsonFile<T>(fileName: string): Promise<T[]> {
    const filePath = join(__dirname, '..', '..', '..', 'database', fileName);
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
}
