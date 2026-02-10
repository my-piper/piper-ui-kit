import { Pipe, PipeTransform } from "@angular/core";
import { Subject } from "rxjs";

@Pipe({ name: "hook", pure: false })
export class HookPipe implements PipeTransform {
  current: unknown;
  subject: Subject<unknown>;

  transform(value: unknown): Subject<unknown> {
    if (this.subject) {
      if (this.current !== value) {
        this.current = value;
        this.subject.next(value);
      }
    } else {
      this.subject = new Subject<unknown>();
    }
    return this.subject;
  }
}
