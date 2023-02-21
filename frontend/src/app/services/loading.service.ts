

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  constructor() { }

  showLoading(){
    //this.isLoadingSubject.next(true);
    this.isLoadingSubject.next(false);
  }

  hideLoading(){
    this.isLoadingSubject.next(false);
  }

  get isLoading(){
    return this.isLoadingSubject.asObservable();
  }
}
