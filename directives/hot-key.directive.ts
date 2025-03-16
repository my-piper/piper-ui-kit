import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[hotKey]",
})
export class HotKeyDirective {
  @Input()
  hotKey!: string;

  @Output()
  hotKeyPressed = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  @HostListener("document:keydown", ["$event"])
  handleKeyDown(event: KeyboardEvent) {
    console.log(
      this.isElementVisible(),
      event.key.toLowerCase(),
      this.hotKey.toLowerCase()
    );
    if (
      this.isElementVisible() &&
      event.key.toLowerCase() === this.hotKey.toLowerCase()
    ) {
      this.hotKeyPressed.emit();
    }
  }

  private isElementVisible(): boolean {
    const element = this.el.nativeElement as HTMLElement;
    return !!(
      element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length
    );
  }
}
