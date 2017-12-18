import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule , MatCardModule , MatTableModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule , MatCardModule, MatTableModule],
  exports: [MatButtonModule, MatToolbarModule , MatCardModule , MatTableModule],
})
export class MaterialModule {}
