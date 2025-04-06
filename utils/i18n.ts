import { trim } from "lodash";
import { parse } from "qs";
import { DEFAULT_LANGUAGE } from "../consts";
import { Languages } from "../enums/languages";

const SPLIT_REGEX = /---\s*(\w+)\s*---\s*\n/g;

function multiline(text: string, language: Languages): string {
  const chunks = text.split(SPLIT_REGEX);
  const en = chunks[0];

  const languages: { [key: string]: string } = {};
  for (let i = 1; i < chunks.length; i += 2) {
    const [l, c] = [chunks[i], chunks[i + 1]];
    languages[l] = c;
  }

  return languages[language as string] || en;
}

export function getLabel(
  source: string,
  language: Languages,
  { mode }: { mode: "inline" | "multiline" } = { mode: "inline" }
) {
  switch (mode) {
    case "multiline":
      return multiline(source, language);
    case "inline":
    default:
      const labels = parse(source, { delimiter: ";" });
      return trim(
        (labels[language] as string) ||
          (labels[DEFAULT_LANGUAGE] as string) ||
          source
      );
  }
}
