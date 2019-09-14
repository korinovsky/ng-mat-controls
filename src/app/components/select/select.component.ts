import {Component, Input} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {FormFieldClass, Option} from '../components.model';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent extends FormFieldClass {
    @Input() options: Option[];
    selectControl = new FormControl(null, Validators.required);
}
