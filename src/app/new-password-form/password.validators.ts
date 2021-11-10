import { AbstractControl, ValidationErrors } from "@angular/forms";


export class PasswordValidators {
    
    static shouldMatch(control: AbstractControl) : Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (control.value != '1234')
                    resolve({shouldMatch: true});
                else 
                    resolve(null)
            },2000)
        })

    }

    static newConfirmShouldMatch(control: AbstractControl) : ValidationErrors | null {
        if (control.value != control.parent?.get('new')?.value)
            return {newConfirmShouldMatch: true};

        return null;
    }
    
}