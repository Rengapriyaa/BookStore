import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"bookstore-2d2d7","appId":"1:1041960632218:web:44fa5b7c9420727c714423","databaseURL":"https://bookstore-2d2d7-default-rtdb.firebaseio.com","storageBucket":"bookstore-2d2d7.appspot.com","locationId":"us-central","apiKey":"AIzaSyCKFJ9XcLASAnUQNVATYSynFHX5gTmA2i8","authDomain":"bookstore-2d2d7.firebaseapp.com","messagingSenderId":"1041960632218","measurementId":"G-3PBPKRNEJ9"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())]
};
