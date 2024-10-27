import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { User } from '../class/user.class';
import { addDoc, collection, doc, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-edit-adress',
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
  templateUrl: './dialog-edit-adress.component.html',
  styleUrl: './dialog-edit-adress.component.scss'
})
export class DialogEditAdressComponent {

  user = new User();
  loading: boolean = false;

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogEditAdressComponent>){
  }

  saveAdress() {
    this.loading = true;
    const userRef = doc(collection(this.firestore, 'users'), this.user.id);
    updateDoc(userRef, { 
      street: this.user.street,
      zipCode: this.user.zipCode,
      city: this.user.city,
      birthDate: this.user.birthDate
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
