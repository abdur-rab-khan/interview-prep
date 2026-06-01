import { readFileSync } from "fs";
import path from "path";

export function getCodeFromPath(codePath: string): string {
  const filePath = path.join(process.cwd(), "src/preparation", codePath);
  return readFileSync(filePath, "utf-8");
}
