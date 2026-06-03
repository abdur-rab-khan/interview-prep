import { readFileSync } from "fs";
import path from "path";

export function getCodeFromPath(codePath: string): string {
  const filePath = path.join(process.cwd(), "src/problems", codePath);
  return readFileSync(filePath, "utf-8");
}
