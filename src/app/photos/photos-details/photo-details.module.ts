import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [PhotoDetailsComponent],
    exports: [PhotoDetailsComponent],
    imports: [
        CommonModule,
        PhotoModule
    ],
})
export class PhotoDetailsModule { }