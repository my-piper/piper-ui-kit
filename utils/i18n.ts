import { trim } from "lodash";
import { parse } from "qs";
import { DEFAULT_LANGUAGE } from "../consts";
import { Languages } from "../enums/languages";

export function getLabel(source: string, language: Languages) {
  const labels = parse(source, { delimiter: ";" });
  return trim(
    (labels[language] as string) ||
      (labels[DEFAULT_LANGUAGE] as string) ||
      source
  );
}
