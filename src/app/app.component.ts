import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from './services/models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentEmpName: string | undefined = "Ankur";
  safeURL: SafeResourceUrl = '';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().pipe(
      first()
    ).subscribe(
      (data: User[]) => this.userService.allUsers$.next(data),    // On Success
      error => console.log(error.message)  // On Fail
    );
  }

  onDataBeingReceivedByChild(event: string) {
    console.log(event);
  }

  /**
   * Navigates to First page
   */
  onClickOfFirst(): void {
    this.router.navigate(['/first'], { queryParams: { empName: 'Ankur', empId: '002' } });
  }

  /**
   * Navigates to Second page
   */
  onClickOfSecond(): void {
    this.router.navigate(['/second']);
  }

}
