import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DocumentReference, doc as firestoreDoc } from '@firebase/firestore';
import { Exam } from '../models/exam.interface';

@Injectable({
    providedIn: 'root'
})
export class ExamService {
    private collectionName = 'exams';

    constructor(private firestore: Firestore) { }

    addExam(exam: Exam): Promise<DocumentReference> {
        const examCollection = collection(this.firestore, this.collectionName);
        return addDoc(examCollection, exam);
    }

    getExams(): Observable<Exam[]> {
        const examCollection = collection(this.firestore, this.collectionName);
        return collectionData(examCollection, { idField: 'id' }) as Observable<Exam[]>;
    }

    getExamById(id: number): Observable<Exam> {
        const examDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
        return docData(examDocRef, { idField: 'id' }) as Observable<Exam>;
    }

    updateExam(id: number, updatedExam: Partial<Exam>): Promise<void> {
        const examDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
        return updateDoc(examDocRef, { ...updatedExam }) as Promise<void>;
    }

    deleteExam(id: number): Promise<void> {
        const examDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
        return deleteDoc(examDocRef) as Promise<void>;
    }
}
