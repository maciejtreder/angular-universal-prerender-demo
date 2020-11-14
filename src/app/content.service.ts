import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { Realization } from './model/realization.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient, private ts: TransferState) { }

  public getRealizations(): Observable<Realization[]> {
    const realizations = this.ts.get(makeStateKey<Realization[]>("realizations"), null);
    if (realizations) {
      return of(realizations)
    }
      return this.http.get<Realization[]>('/angular-universal-prerender-demo/assets/realizations.json');
  }
}
