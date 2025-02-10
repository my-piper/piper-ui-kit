import { Location } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";
import { Langs } from "src/enums/langs";

@Pipe({ name: "getUrl" })
export class GetUrlPipe implements PipeTransform {
  constructor(private location: Location) {}

  transform(lang: Langs): string {
    const slug = lang.toLowerCase();
    return `/${slug}${this.location.path()}`;
  }
}
