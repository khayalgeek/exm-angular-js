import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, collection } from '@angular/fire/firestore';
import { Lesson } from '../models/lesson.interface'; 
import { Observable } from 'rxjs';
import { DocumentReference, doc as firestoreDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private collectionName = 'lessons';

  constructor(private firestore: Firestore) {}

  addLesson(lesson: Lesson): Promise<DocumentReference> {
    const lessonCollection = collection(this.firestore, this.collectionName);
    return addDoc(lessonCollection, lesson);
  }

  getLessons(): Observable<Lesson[]> {
    const lessonCollection = collection(this.firestore, this.collectionName);
    return collectionData(lessonCollection, { idField: 'id' }) as Observable<Lesson[]>;
  }

  getLessonById(id: number): Observable<Lesson> {
    const lessonDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
    return docData(lessonDocRef, { idField: 'id' }) as Observable<Lesson>;
  }

  updateLesson(id: number, updatedLesson: Partial<Lesson>): Promise<void> {
    const lessonDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
    return updateDoc(lessonDocRef, { ...updatedLesson }) as Promise<void>;
  }

  deleteLesson(id: number): Promise<void> {
    const lessonDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
    return deleteDoc(lessonDocRef) as Promise<void>;
  }
}
