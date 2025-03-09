import { Pipe, PipeTransform } from "@angular/core";
import { round } from "lodash";
import { BehaviorSubject, Observable } from "rxjs";

@Pipe({ name: "countdown" })
export class CountdownPipe implements PipeTransform {
  timer: any | null = null;
  prev: number | null = null;

  transform(number: number): Observable<number> {
    clearTimeout(this.timer);
    let current = !!this.prev ? this.prev : number / 5;
    this.prev = number;

    const counter = new BehaviorSubject<number>(current);
    const count = () => {
      current += Math.max((number - current) / 2, number > 0 ? 0.005 : -0.005);
      current = round(current, 3);
      if (number > 0 ? current < number : current > number) {
        counter.next(current);
        this.timer = setTimeout(count, 50);
      } else {
        counter.next(number);
      }
    };
    count();
    return counter;
  }
}
