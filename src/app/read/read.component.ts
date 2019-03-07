import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { Tutorial } from '../Tutorial';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>

  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorial');  // get the tutorial prop from StoreModule (defined in app.module.ts)
  }

  ngOnInit() {
  }

}
