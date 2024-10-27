import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../class/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, addDoc, collection, doc, setDoc } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';






@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogActions,
    MatDialogContent,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    FormsModule,
    MatProgressBarModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  user = new User();
  birthDate!: Date;
  loading: boolean = false;

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>){
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    
    this.loading = true;
    const userCollection = collection(this.firestore, 'users'); 
    addDoc(userCollection, { ...this.user.toJSON() }) 
      .then((docRef) => {
        this.user.id = docRef.id;
        const userRef = doc(this.firestore, 'users', this.user.id);
        return setDoc(userRef, { id: this.user.id }, { merge: true });
      })
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error("Error adding user to Firestore: ", error);
      });
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
