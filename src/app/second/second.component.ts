import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../services/models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  newUser: User = {};

  myForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]),
    phone: new FormControl(''),
    website: new FormControl('')
  });

  constructor(private userSercive: UserService) { }

  onSubmit() {
    this.newUser.name = this.myForm.get('name')?.value;
    this.newUser.username = this.myForm.get('username')?.value;
    this.newUser.email = this.myForm.get('username')?.value;
    this.newUser.phone = this.myForm.get('username')?.value;
    this.newUser.website = this.myForm.get('username')?.value;
    this.newUser.company = {
      name: 'test',
      catchPhrase: 'test',
      bs: 'test'
    }
    this.newUser.address = {
      street: 'Kulas Light',
      suite: 'Apt. 604',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    }
    this.userSercive.createUser(this.newUser).subscribe(
      data => alert('User created'),
      error => alert('Failed to create user')
    );
  }
}
