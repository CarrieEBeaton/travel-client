import { Directive, Input } from "@angular/core";
import { FormGroupDirective } from '@angular/forms';

@Directive({selector: '[connectForm]'})
export class ConnectFormDirective {
    @Input('connectForm')
    set data(val: any) {
        console.log('here');
        console.log(val);
        if (val) {
            console.log(val);
            this.formGroupDirective.form.patchValue(val);
            this.formGroupDirective.form.markAsPristine();
        }
    }

    constructor(private formGroupDirective: FormGroupDirective) {}
}