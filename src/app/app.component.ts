import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    RouterLink,
    MatButtonModule,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  firestore: Firestore = inject(Firestore);

  @Input() opened: boolean = true;

  items$: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);
  }

}