import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserComponent } from './dialog-edit-user.component';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditUserComponent],
      providers: [
          { provide: Firestore, useValue: {} },
          { provide: MatDialogRef, useValue: {} },
          provideNativeDateAdapter(), 
          provideAnimationsAsync(),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.true;
  });
});
