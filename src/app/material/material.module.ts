import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MdbCarouselModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
