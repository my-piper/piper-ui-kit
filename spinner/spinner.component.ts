import { Component, Input } from "@angular/core";
import { UI } from "../consts";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
})
export class SpinnerComponent {
  @Input()
  size: string = "normal";

  @Input()
  color: string = UI.color.primary;
}
