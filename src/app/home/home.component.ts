import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  loading: boolean = true;

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.generateForm();
  }

  generateForm(){
    this.form = new FormGroup({
      username : new FormControl('', [Validators.required]),
    });
  }

  async search(){
    let response = await this.requestService.getUser(this.form.get('username').value)
    console.log("response", response);
  }

}
