import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

export class Customer {
  Code: string = '';
  Name: string = '';
  Amount: number = 0;
  customerFormGroup!: FormGroup;

  constructor() {
    let formBuilder = new FormBuilder();
    this.customerFormGroup = formBuilder.group({});

    this.customerFormGroup.addControl(
      'CustomerNameControl',
      new FormControl('', Validators.required)
    );

    let validationCollection = [];
    validationCollection.push(Validators.required);
    validationCollection.push(Validators.pattern('^[0-9]{4,4}$'));

    this.customerFormGroup.addControl(
      'CustomerCodeControl',
      new FormControl('', validationCollection)
    );
  }
}
