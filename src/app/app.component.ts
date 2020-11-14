import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentService } from './content.service';
import { Realization } from './model/realization.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public realizations: Observable<Realization[]>;

  constructor(private cs: ContentService) {}

  ngOnInit(): void {
    this.realizations = this.cs.getRealizations();
  }
}
