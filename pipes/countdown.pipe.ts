import { Pipe, PipeTransform } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Pipe({ name: "countdown" })
export class CountdownPipe implements PipeTransform {
  prev: number = 0;
  timer: any | null = null;

  transform(number: number): Observable<number> {
    clearTimeout(this.timer);
    this.prev = 0;
    const direction: "up" | "down" = number > this.prev ? "up" : "down";
    let current = this.prev;

    const step = number % 1 !== 0 ? number / 100 : 1;

    const counter = new BehaviorSubject<number>(current);
    const count = () => {
      current += Math.max(
        number / 5,
        (Math.abs(number - current) / 2) * (direction === "up" ? step : -step)
      );
      counter.next(current);
      if (
        (direction === "up" && current < number) ||
        (direction === "down" && current > number)
      ) {
        this.timer = setTimeout(count, 50);
      } else {
        this.prev = number;
        counter.next(number);
      }
    };
    count();
    return counter;
  }
}
