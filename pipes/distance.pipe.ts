import { Inject, Pipe, PipeTransform } from "@angular/core";
import { Locale } from "date-fns";
import formatDistance from "date-fns/formatDistance";
import { DATE_LOCALE } from "src/ui-kit/providers/date-locale";

@Pipe({ name: "distance" })
export class DistancePipe implements PipeTransform {
  constructor(@Inject(DATE_LOCALE) private locale: Locale) {}

  transform(end: Date): string {
    return formatDistance(end, new Date(), {
      includeSeconds: false,
      addSuffix: true,
      locale: this.locale,
    });
  }
}
