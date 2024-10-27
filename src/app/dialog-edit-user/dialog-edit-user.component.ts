import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../class/user.class';
import { collection, doc, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
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
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {

  user = new User();
  loading: boolean = false;
  birthDate!: Date;

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogEditUserComponent>){
  }

  saveUser() {
    this.loading = true;
    const userRef = doc(collection(this.firestore, 'users'), this.user.id);
    updateDoc(userRef, { 
      firstName: this.user.firstName,
      surName: this.user.surName,
      email: this.user.email,
    })
    .then(() => {
        this.loading = false;
        this.dialogRef.close();
      })
    .catch((error) => {
        console.error("Error adding user to Firestore:", error);
      });
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
