import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormFieldClass} from '../components.model';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent extends FormFieldClass implements OnInit {
    @Input()
    startView: 'month' | 'year' | 'multi-year' = 'month';
    inputControl = new FormControl(null, Validators.required);

    ngOnInit() {
        this.inputControl.statusChanges.subscribe(this.statusChanges.bind(this));
        this.statusChanges();
    }

    protected statusChanges() {
        this.errors = this.inputControl.errors;
    }
}
