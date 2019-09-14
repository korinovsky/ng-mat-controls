import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material';
import {SelectComponent} from './select.component';
import {formFieldOptionsProvider} from '../components.provider';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [SelectComponent],
    imports: [
        CommonModule,
        MatSelectModule,
        ReactiveFormsModule
    ],
    exports: [
        SelectComponent
    ],
    providers: [
        formFieldOptionsProvider,
    ]
})
export class SelectModule {
}
