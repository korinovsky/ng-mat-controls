import {MAT_DATE_LOCALE, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material';
import {Provider} from '@angular/core';

export const formFieldOptionsProvider: Provider = {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
        appearance:  'outline'
    }
};

export const dateLocaleProvider: Provider = {
    provide: MAT_DATE_LOCALE,
    useValue: 'ru-RU'
};
