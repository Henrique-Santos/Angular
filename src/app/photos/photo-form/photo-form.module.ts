import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoFormComponent } from './photo-form.component';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule
    ]
})
export class PhotoFormModule { }