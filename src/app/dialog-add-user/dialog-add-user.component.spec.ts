import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUserComponent } from './dialog-add-user.component';
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseapp } from '../app.config';
import { MatDialogRef } from '@angular/material/dialog';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogAddUserComponent,
        FirebaseAppModule,
      ],
      providers: [
        { provide: Firestore, useValue: {} }, 
        { provide: MatDialogRef, useValue: {} },
        provideNativeDateAdapter(),
        provideAnimationsAsync(),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.true;
  });
});
