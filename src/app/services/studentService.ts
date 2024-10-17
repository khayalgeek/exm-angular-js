import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DocumentReference, doc as firestoreDoc } from '@firebase/firestore';
import { Student } from '../models/student.interface';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private collectionName = 'students';

    constructor(private firestore: Firestore) { }

    addStudent(student: Student): Promise<DocumentReference> {
        const studentCollection = collection(this.firestore, this.collectionName);
        return addDoc(studentCollection, student);
    }

    getStudents(): Observable<Student[]> {
        const studentCollection = collection(this.firestore, this.collectionName);
        return collectionData(studentCollection, { idField: 'id' }) as Observable<Student[]>;
    }

    getStudentById(id: number): Observable<Student> {
        const studentDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
        return docData(studentDocRef, { idField: 'id' }) as Observable<Student>;
    }

    updateStudent(id: number, updatedStudent: Partial<Student>): Promise<void> {
        const studentDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
        return updateDoc(studentDocRef, { ...updatedStudent }) as Promise<void>;
    }

    deleteStudent(id: number): Promise<void> {
        const studentDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
        return deleteDoc(studentDocRef) as Promise<void>;
    }
}
