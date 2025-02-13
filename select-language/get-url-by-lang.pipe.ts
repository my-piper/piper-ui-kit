import { Location } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";
import { Languages } from "src/ui-kit/enums/languages";

@Pipe({ name: "getUrl" })
export class GetUrlPipe implements PipeTransform {
  constructor(private location: Location) {}

  transform(lang: Languages): string {
    const slug = lang.toLowerCase();
    return `/${slug}${this.location.path()}`;
  }
}
