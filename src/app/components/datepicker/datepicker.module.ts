import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatepickerComponent} from './datepicker.component';
import {MatDatepickerModule, MatInputModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {dateLocaleProvider, formFieldOptionsProvider} from '../components.provider';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [DatepickerComponent],
    imports: [
        CommonModule,
        MatMomentDateModule,
        MatDatepickerModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
    exports: [
        DatepickerComponent
    ],
    providers: [
        formFieldOptionsProvider,
        dateLocaleProvider,
    ]
})
export class DatepickerModule {
}
