import { FormControl, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
// setup simple regex for white listed characters
const validCharacters = /[^\s\w,.:&\/()+%'`@-]/;
const validPassWord = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}/;
// const validPassWord = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}/;

// create your class that extends the angular validator class
export class CustomValidators extends Validators {

    // create a static method for your validation
    static validateCharacters(control: AbstractControl) {

        // first check if the control has a value
        if (control.value && control.value.length > 0) {

            // match the control value against the regular expression
            const matches = control.value.match(validCharacters);

            // if there are matches return an object, else return null.
            return matches && matches.length ? { invalid_characters: matches } : null;
        } else {
            return null;
        }
    }

    static validatePassword(control: AbstractControl) {

        // first check if the control has a value
        if (control.value && control.value.length > 0) {

            // match the control value against the regular expression
            // const matches = control.value.match(validPassWord);
            const matches = !validPassWord.test(control.value);

            // if there are matches return an object, else return null.
            console.log('------->>', matches);
            return matches ? { invalid_password: matches } : null;
        } else {
            return null;
        }
    }
}
