import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
})
export class IconComponent {
  @Input()
  icon!: string;

  @HostBinding("style.min-width.px")
  @HostBinding("style.min-height.px")
  @HostBinding("style.width.px")
  @HostBinding("style.height.px")
  @Input()
  size: number = 22;

  @Input()
  color = "white";

  @HostBinding("attr.data-stroke")
  @Input()
  stroke = 1;
}
