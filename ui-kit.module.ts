import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
<<<<<<< HEAD
import { IncludesPipe } from "src/ui-kit/pipes/includes.pipe";
=======
import { InViewportDirective } from "./directives/in-viewport.directive";
>>>>>>> b3a9132ee0aeb8857712eb091b210fc3c9e92d8e
import { IconComponent } from "./icon/icon.component";
import { InformerComponent } from "./informer/informer.component";
import { ModalComponent } from "./modal/modal.component";
import { ModalDirective } from "./modal/modal.directive";
import { CountdownPipe } from "./pipes/countdown.pipe";
import { DistancePipe } from "./pipes/distance.pipe";
import { I18nPipe } from "./pipes/i18n.pipe";
import { InvalidFieldPipe } from "./pipes/invalid-field.pipe";
import { PopoverComponent } from "./popover/popover.component";
import { PopoverDirective } from "./popover/popover.directive";
import { GetUrlPipe } from "./select-language/get-url-by-lang.pipe";
import { SelectLanguageComponent } from "./select-language/select-language.component";
import { SliderComponent } from "./slider/slider.component";
import { SpinnerComponent } from "./spinner/spinner.component";
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
    GetUrlPipe,
    SelectLanguageComponent,
    SpinnerComponent,
    DistancePipe,
    CountdownPipe,
    I18nPipe,
<<<<<<< HEAD
    IncludesPipe,
=======
    InViewportDirective,
>>>>>>> b3a9132ee0aeb8857712eb091b210fc3c9e92d8e
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
    SelectLanguageComponent,
    SpinnerComponent,
    DistancePipe,
    CountdownPipe,
    I18nPipe,
<<<<<<< HEAD
    IncludesPipe,
=======
    InViewportDirective,
>>>>>>> b3a9132ee0aeb8857712eb091b210fc3c9e92d8e
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class UiKitModule {}
