import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IncludesPipe } from "src/ui-kit/pipes/includes.pipe";
import { HotKeyDirective } from "./directives/hot-key.directive";
import { InViewportDirective } from "./directives/in-viewport.directive";
import { IconComponent } from "./icon/icon.component";
import { InformerComponent } from "./informer/informer.component";
import { ModalComponent } from "./modal/modal.component";
import { ModalDirective } from "./modal/modal.directive";
import { CountdownPipe } from "./pipes/countdown.pipe";
import { FileTypePipe } from "./pipes/file-type.pipe";
import { I18nPipe, LabelsPipe } from "./pipes/i18n.pipe";
import { InvalidFieldPipe } from "./pipes/invalid-field.pipe";
import { LengthPipe } from "./pipes/length.pipe";
import { MockArrayPipe } from "./pipes/mock-array.pipe";
import { TimePassedPipe } from "./pipes/time-passed.pipe";
import { PopoverComponent } from "./popover/popover.component";
import { PopoverDirective } from "./popover/popover.directive";
import { GetUrlPipe } from "./select-language/get-url-by-lang.pipe";
import { SelectLanguageComponent } from "./select-language/select-language.component";
import { SkeletonComponent } from "./skeleton/skeleton.component";
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
    TimePassedPipe,
    CountdownPipe,
    I18nPipe,
    IncludesPipe,
    InViewportDirective,
    HotKeyDirective,
    FileTypePipe,
    LengthPipe,
    SkeletonComponent,
    MockArrayPipe,
    LabelsPipe,
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
    TimePassedPipe,
    CountdownPipe,
    I18nPipe,
    IncludesPipe,
    InViewportDirective,
    HotKeyDirective,
    FileTypePipe,
    LengthPipe,
    SkeletonComponent,
    MockArrayPipe,
    LabelsPipe,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class UiKitModule {}
