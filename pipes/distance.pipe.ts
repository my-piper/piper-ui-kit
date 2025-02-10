import { Pipe, PipeTransform } from "@angular/core";
import formatDistance from "date-fns/formatDistance";

@Pipe({ name: "distance" })
export class DistancePipe implements PipeTransform {
  transform(end: Date): string {
    return formatDistance(new Date(), end, {
      includeSeconds: false,
      addSuffix: true,
    });
  }
}
