import {NgModule} from '@angular/core';
import {SelectModule} from './select/select.module';
import {DatepickerModule} from './datepicker/datepicker.module';

@NgModule({
    imports: [
        SelectModule,
        DatepickerModule,
    ],
    exports: [
        SelectModule,
        DatepickerModule,
    ]
})
export class ComponentsModule {
}
