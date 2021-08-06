import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../services/models/user.model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  dataSource: User[] = [];
  displayedColumns: string[] = ['name', 'username', 'email', 'company'];
  searchText: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.allUsers$.pipe(
      first()
    ).subscribe(
      (data) => {
        this.dataSource = data
        console.log(data)
      }
    )
  }


}