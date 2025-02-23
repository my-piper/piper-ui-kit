import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";

@Directive({
  selector: "[inViewport]",
})
export class InViewportDirective implements OnInit, OnDestroy {
  @Output()
  visible = new EventEmitter<void>();

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.visible.emit();
            this.observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
