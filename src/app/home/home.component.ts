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
  loading: boolean = false;
  user: any;
  userRepos: any;

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.generateForm();
  }

  generateForm(){
    this.form = new FormGroup({
      username : new FormControl('luisdurante', [Validators.required]),
    });
  }

  async search(){
    if(this.form.get('username').value.length <= 0) {      
      return
    }

    this.loading = true;
    this.user = await this.requestService.getUser(this.form.get('username').value);
    this.userRepos = await this.requestService.getUserRepos(this.form.get('username').value);
    this.loading = false
  }

  goToProfile(){
    let url = this.user.html_url
    window.open(url, '_blank');
  }

  seeUserRepo(repository){
    let url = repository.html_url
    window.open(url, '_blank');
  }

}
