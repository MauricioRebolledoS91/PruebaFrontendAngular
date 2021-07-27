import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [],
  exports: [ 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatCheckboxModule,
    MatTabsModule,
    MatTableModule, 
    MatProgressSpinnerModule,
    MatChipsModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
