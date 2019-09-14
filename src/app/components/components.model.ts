import {FormControl, ValidationErrors, Validators} from "@angular/forms";
import {Input, OnInit} from "@angular/core";
import * as _ from "lodash";

export interface Option {
    value: string | number | boolean;
    text: string;
}

const errorMessage = {
    required: 'Необходимо заполнить',
    incomplete: 'Заполнено не полностью',
    incorrect: 'Некорректное значение',
    invalid: 'Некорректное значение',
};

export abstract class FormFieldClass implements OnInit {
    @Input() label: string;
    @Input() hint: string;
    @Input() formControl: FormControl;
    errorMessages: string[] = [];

    @Input()
    set errors(errors: ValidationErrors | string[]) {
        if (_.isEmpty(errors)) {
            this.errorMessages = [];
        } else if (_.isArray(errors)) {
            this.errorMessages = errors as string[];
        } else {
            this.errorMessages = _.map(errors, (value, key) => _.get(errorMessage, key, key));
        }
    }

    ngOnInit() {
        this.formControl.statusChanges.subscribe(this.statusChanges.bind(this));
        this.statusChanges();
    }

    protected statusChanges() {
        this.errors = this.formControl.errors;
    }
}
