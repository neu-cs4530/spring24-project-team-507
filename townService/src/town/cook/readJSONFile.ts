import { readFileSync } from 'fs';
import { join } from 'path';

export default function readJsonFile<T>(fileName: string): T[] {
  const filePath = join(__dirname, '..', '..', '..', 'src/database', fileName);
  const data = readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}
