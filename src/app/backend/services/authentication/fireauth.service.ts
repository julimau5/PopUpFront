import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument,} from '@angular/fire/compat/firestore';
import { User } from 'src/app/backend/Interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class FireauthService {
  public currentUser: User = null;

  constructor(
    public angularfireAuth: AngularFireAuth,
    public angularFirestoreDB: AngularFirestore
  ) {
    this.angularfireAuth.onAuthStateChanged((user) => {
      console.log('changed:', user);
      this.currentUser = user;
    });
   }

   singInWithEmail({ email, password }) {
    return this.angularfireAuth.signInWithEmailAndPassword(email, password);
  }

  singOut() {
    this.angularfireAuth.signOut();
  }
}
