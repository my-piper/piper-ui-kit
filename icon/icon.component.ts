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
  size: number = 24;

  @Input()
  color = "black";

  @HostBinding("attr.data-stroke")
  @Input()
  stroke = 2;
}
