import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InformerComponent } from "./informer.component";

@NgModule({
  imports: [CommonModule],
  declarations: [InformerComponent],
  exports: [InformerComponent],
})
export class InformerModule {}
