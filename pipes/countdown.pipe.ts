import { Pipe, PipeTransform } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Pipe({ name: "countdown" })
export class CountdownPipe implements PipeTransform {
  timer: any | null = null;

  transform(number: number): Observable<number> {
    clearTimeout(this.timer);
    let current = number / 5;

    const counter = new BehaviorSubject<number>(current);
    const count = () => {
      current += Math.max((number - current) / 4, number > 0 ? 0.005 : -0.005);
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
