import { Injectable } from '@angular/core';
import * as fs from 'fs';
import { Observable } from 'rxjs';
import { Realization } from './model/realization.model';

@Injectable({
  providedIn: 'root'
})
export class ContentServerService {

  constructor() { }


  public getRealizations(): Observable<Realization[]> {
    return new Observable(subject => {
      fs.readFile(`${process.cwd()}/src/assets/realizations.json`, 'utf8', (err, data) => {
        subject.next(JSON.parse(data));
        subject.complete();
      });
    })
    // return this.http.get<Realization[]>('/angular-universal-prerender-demo/assets/realizations.json');
  }
}
