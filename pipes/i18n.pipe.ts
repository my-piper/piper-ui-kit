import { Inject, Pipe, PipeTransform } from "@angular/core";
import { Languages } from "src/ui-kit/enums/languages";
import { CURRENT_LANGUAGE } from "../providers/current-language";
import { getLabel } from "../utils/i18n";

@Pipe({ name: "i18n" })
export class I18nPipe implements PipeTransform {
  constructor(@Inject(CURRENT_LANGUAGE) private language: Languages) {}

  transform(source: string): string {
    return getLabel(source, this.language);
  }
}
