import { Inject, Pipe, PipeTransform } from "@angular/core";
import { trim } from "lodash";
import { parse } from "qs";
import { Langs } from "src/ui-kit/enums/langs";
import { DEFAULT_LANG } from "../consts";
import { CURRENT_LANG } from "../providers/current-lang";

@Pipe({ name: "i18n" })
export class I18nPipe implements PipeTransform {
  constructor(@Inject(CURRENT_LANG) private language: Langs) {}

  transform(source: string): string {
    const labels = parse(source, { delimiter: ";" });
    return trim(
      (labels[this.language] as string) ||
        (labels[DEFAULT_LANG] as string) ||
        source
    );
  }
}
