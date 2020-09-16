import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  loading: boolean = true;

  constructor() { }

  ngOnInit() {
    this.generateForm();
  }

  generateForm(){
    this.form = new FormGroup({
      username : new FormControl('', [Validators.required]),
    });
  }

  search(){
    console.log(this.form.value);
  }

}
