import { Component, Input } from "@angular/core";
import { UI } from "../consts";

@Component({
  selector: "app-skeleton",
  templateUrl: "./skeleton.component.html",
  styleUrls: ["./skeleton.component.scss"],
})
export class SkeletonComponent {
  ui = UI;

  @Input()
  type: "lines" | "cards";

  @Input()
  cols = 4;

  @Input()
  rows = 3;
}
