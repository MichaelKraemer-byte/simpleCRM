import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseapp } from './app.config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: Firestore, useValue: {} },
        provideAnimationsAsync(),
        provideFirebaseApp(() => 
          initializeApp(firebaseapp)
        ), provideFirestore(() => getFirestore())
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).to.be.true;
  });

  // it(`should have the 'simplecrm' title`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('simplecrm');
  // });
});
