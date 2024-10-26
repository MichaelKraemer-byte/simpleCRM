import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideNativeDateAdapter(),
    provideAnimationsAsync(), provideFirebaseApp(() => 
      initializeApp({
        "projectId":"simple-crm-1be00",
        "appId":"1:1065198846708:web:d1fb08e1f3be93b0d254a1",
        "storageBucket":"simple-crm-1be00.appspot.com",
        "apiKey":"AIzaSyA_NvCRxRiF4xZxX4CrQsZ-VMoP3Su4tPU",
        "authDomain":"simple-crm-1be00.firebaseapp.com",
        "messagingSenderId":"1065198846708"
      })
    ), provideFirestore(() => getFirestore())]
};