import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [InputComponent],
    exports: [
        InputComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class InputModule { }
