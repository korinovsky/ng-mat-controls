import {Component} from '@angular/core';
import {FormControl, NgControl} from "@angular/forms";
import {FormFieldClass} from "../components.model";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent extends FormFieldClass {
}

