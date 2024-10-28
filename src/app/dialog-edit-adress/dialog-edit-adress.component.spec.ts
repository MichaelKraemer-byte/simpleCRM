import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAdressComponent } from './dialog-edit-adress.component';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('DialogEditAdressComponent', () => {
  let component: DialogEditAdressComponent;
  let fixture: ComponentFixture<DialogEditAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogEditAdressComponent,
      ],
      providers: [
        { provide: Firestore, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        provideAnimationsAsync(),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.true;
  });
});
