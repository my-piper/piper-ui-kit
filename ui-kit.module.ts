import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IconComponent } from "./icon/icon.component";
import { InformerComponent } from "./informer/informer.component";
import { ModalComponent } from "./modal/modal.component";
import { ModalDirective } from "./modal/modal.directive";
import { CountdownPipe } from "./pipes/countdown.pipe";
import { InvalidFieldPipe } from "./pipes/invalid-field.pipe";
import { PopoverComponent } from "./popover/popover.component";
import { PopoverDirective } from "./popover/popover.directive";
import { SliderComponent } from "./slider/slider.component";
import { TabsComponent } from "./tabs/tabs.component";

@NgModule({
  declarations: [
    IconComponent,
    InformerComponent,
    ModalComponent,
    ModalDirective,
    PopoverComponent,
    PopoverDirective,
    SliderComponent,
    TabsComponent,
    InvalidFieldPipe,
    CountdownPipe,
  ],
  exports: [
    IconComponent,
    InformerComponent,
    ModalComponent,
    ModalDirective,
    PopoverComponent,
    PopoverDirective,
    SliderComponent,
    TabsComponent,
    InvalidFieldPipe,
    CountdownPipe,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class UiKitModule {}
