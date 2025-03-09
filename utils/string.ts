import { customAlphabet } from "nanoid";

export function sid(): string {
  return customAlphabet("1234567890abcdef", 10)();
}
