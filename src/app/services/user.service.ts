import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly userUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // allUsers$: Subject | BehaviorSubject | ReplaySubject;
  test: User[] = []
  // allUsers$: Subject<User[]> = new Subject();
  allUsers$: BehaviorSubject<User[]> = new BehaviorSubject(this.test);

  // A -> B

  /**
   * Gets the list of all users from DB.
   * @returns Array of users as Observable
   */
  getAllUsers(): Observable<User[]> {
    return this.http.get(this.userUrl).pipe(
      map((resp: any) => resp)
    )
  }

  /**
   * Creates a new user.
   * @param newUser Is object of User type, containing details of a user to be created.
   * @returns Newly created user as observable.
   */
  createUser(newUser: User): Observable<any> {
    return this.http.post(this.userUrl, newUser);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.userUrl, user);
  }
}
