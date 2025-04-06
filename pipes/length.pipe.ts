import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "length" })
export class LengthPipe implements PipeTransform {
  transform<T>(arr: T[]): number {
    return arr.length;
  }
}
