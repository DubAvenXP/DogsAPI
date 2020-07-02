import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomDogsService } from './service/random-dogs.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    RandomDogsService,
  ],
})
export class CoreModule { }
