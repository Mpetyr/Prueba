import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/shared/components/models/user';
import { RoleValidator } from '../../helpers/roleValidator';

@Injectable({
  providedIn: 'root'
})
export class PagesService extends RoleValidator {

  public user$: Observable<User>;

  constructor(public afAuth: AngularFireAuth, private afs:
    AngularFirestore) { 
    super();
    this.user$ = this.afAuth.authState.pipe(
      switchMap( user => {
        if (user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of (null);
      })
    )
    }

    async login(email:string, password:string): Promise<User>{
      try{   
      const {user} = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
        );
        //this.updateUserData(user);
        return user;
      }
      catch(error){
        console.log(error);
      }
    }

    async logout(){

      try{
        await this.afAuth.signOut();
      }
      catch(error){
        console.log(error);
      }
      
    }
  
  
    private updateUserData(user:User){
      const userRef : AngularFirestoreDocument<User> = this.afs.doc(`users/${user.id}`);
  
      const data:User = {
        id: user.id,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        nombres: user.nombres,
        apellidos: user.apellidos,
        identificacion: user.identificacion,
        role: 'ADMINISTRADOR',
        estado: user.estado,
        telefono: user.telefono
      };
  
      return userRef.set( data, { merge: true });
    }

}
