import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
public cadastroForm:FormGroup = this.formBuilder.group({
  firstName:['']
})


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
