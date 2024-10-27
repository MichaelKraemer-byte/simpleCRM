import { Component } from '@angular/core';
import { collection, collectionData, doc, Firestore, getDoc, onSnapshot } from '@angular/fire/firestore';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../class/user.class';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatIcon,
    MatIconButton,
    MatMenuModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userId: string | null = '';
  user: User = new User();

  constructor(
    private route: ActivatedRoute, 
    private firestore: Firestore,
    private dialog: MatDialog
  ) { 
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUser();
  }

  getUser() {
    if (this.userId) {
      const userDoc = doc(this.firestore, 'users', this.userId);
      onSnapshot(userDoc, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          this.user = new User(data)
        } else {
          console.log('No such user document found!');
        }
      }, (error) => {
        console.error("Error fetching user document: ", error);
      });
    }
  }

  openEditAdressDialog(){
    const dialog = this.dialog.open(DialogEditAdressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
  }

  openEditUserDialog(){
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
  }
}
