import {ControlValueAccessor, FormControl, FormGroup} from '@angular/forms';

/**
 * Functionality that we commonly use to create a reusable component that acts as in input
 * A component extending this correctly will pass its own form errors upstream to the parent form
 */
export abstract class BaseFormControl<T> implements ControlValueAccessor {

  form: FormGroup;

  constructor() {
    this.buildForm();
  }

  validate(formControl: FormControl) {
    // Form is untouched or reset, don't run validation
    if (formControl.pristine) { // It is hard to track .reset in here
      this.form.markAsPristine();
      this.form.markAsUntouched();
      return;
    }

    return this.findInvalidControls(this.form);
  }

  public findInvalidControls(form: FormGroup) {
    return Object
      .keys(form.controls)
      .reduce(
        (agg, controlName) => {
          const control = form.get(controlName);
          return control.valid ? agg : {...agg, [controlName]: control.errors};
        },
        {}
      );
  }

  abstract buildForm(): void;

  onTouched = () => {};

  writeValue(val: T): void {
    if (val) { // note: using val && this.form.patchValue(val, {emitEvent: false}); caused linting issues
      this.form.patchValue(val, {emitEvent: false});
    }
  }

  registerOnChange(fn: (val: T) => void): void {
    this.form.valueChanges.subscribe((a) => {
      fn(a);
    });
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    disabled ? this.form.disable() : this.form.enable();
  }

}
