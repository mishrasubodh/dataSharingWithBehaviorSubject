import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BasicService {
  loginValue = new BehaviorSubject({});
  newLoginValue = this.loginValue.asObservable();

  constructor() { }
  setValue = (data: object) => {
    this.loginValue.next(data)
  }
  
}
