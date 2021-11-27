import { AbstractControl, ValidationErrors } from "@angular/forms";


export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true }
       
        return null;
    }
    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                let takenUsernames: string[] = ["kirt", "mosh"]
    
                if (takenUsernames.includes(control.value as string))
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
    
            }, 2000);
        });
    }
}