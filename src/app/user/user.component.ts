import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import {MatCardModule} from '@angular/material/card';
import { collection, Firestore, getDoc, collectionData, CollectionReference } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { User } from '../class/user.class';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIcon,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {


  allUsers: User[] = [];
  
  constructor(public dialog: MatDialog, private firestore: Firestore){
  }

  ngOnInit(): void {
    const userCollection = collection(this.firestore, 'users');

    collectionData(userCollection)
    .subscribe((changes: any) => {
        console.log('Received changes', changes);  
        this.allUsers = changes;
    })
  }

  openDialog(){
    this.dialog.open(DialogAddUserComponent);
  }
}
