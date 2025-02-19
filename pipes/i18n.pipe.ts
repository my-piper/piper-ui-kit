import { Inject, Pipe, PipeTransform } from "@angular/core";
import { trim } from "lodash";
import { parse } from "qs";
import { Languages } from "src/ui-kit/enums/languages";
import { DEFAULT_LANGUAGE } from "../consts";
import { CURRENT_LANGUAGE } from "../providers/current-language";

@Pipe({ name: "i18n" })
export class I18nPipe implements PipeTransform {
  constructor(@Inject(CURRENT_LANGUAGE) private language: Languages) {}

  transform(source: string): string {
    const labels = parse(source, { delimiter: ";" });
    return trim(
      (labels[this.language] as string) ||
        (labels[DEFAULT_LANGUAGE] as string) ||
        source
    );
  }
}
