import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public employee: Observable<User[]>

  private employeesCollection: AngularFirestoreCollection<User>;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) { 
    this.employeesCollection = afs.collection<User>('employee');
    this.getEmployee();
  }


  onDeleteEmployee(empId: string): Promise<void>{

    return new Promise (async (resolve, reject) =>{

      try {
      
        const result = await this.employeesCollection.doc(empId).delete();
        resolve(result); 
        
      } catch (err) {
        reject(err.message);
      }
    })

  }

  onSaveEmployee(employee: User, empId: string): Promise<void>{

    return new Promise( async (resolve, reject) =>{

      try {
        
        const id = empId || this.afs.createId();
        const data = {id, ...employee};
        const result = await this.employeesCollection.doc(id).set(data);
        resolve(result);
        
      } catch (err) {
        reject(err.message)
      }
    });

  }

  private getEmployee(): void{
    this.employee = this.employeesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as User))
    );

  }

}
