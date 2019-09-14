import {Component} from '@angular/core';
import {Option} from './components/components.model';
import {FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styles: []
})
export class AppComponent {
    options: Option[] = [
        {value: 1, text: 'One'},
        {value: 2, text: 'Two'},
        {value: 3, text: 'Three'},
    ];
    formControl = new FormControl(null, [Validators.required, v => (v ? {err: true} : null)]);
    issueDateControl = new FormControl(null, Validators.required);
    birthdayControl = new FormControl(null, Validators.required);
    selectControl = new FormControl(null, Validators.required);
}
