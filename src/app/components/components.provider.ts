import {MAT_DATE_LOCALE, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material';
import {Provider} from '@angular/core';
import {MAT_DATE_FORMATS} from "@angular/material/core";

export const formFieldOptionsProvider: Provider = {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
        appearance:  'outline'
    }
};

export const dateLocaleProvider: Provider = {
    provide: MAT_DATE_LOCALE,
    useValue: 'ru'
};

export const dateFormatProvider: Provider = {
    provide: MAT_DATE_FORMATS,
    useValue: {
        parse: {
            dateInput: 'DD.MM.YYYY',
        },
        display: {
            dateInput: 'DD.MM.YYYY',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
        }
    }
};
