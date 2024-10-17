import { Component } from '@angular/core';
import { Lesson } from '../../models/lesson.interface';
import { LessonService } from '../../services/lessonService';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [TableModule],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent {
  lessons: Lesson[] = [];
  constructor(private lessonService: LessonService) { }

  ngOnInit() {
    this.lessonService.getLessons().subscribe(
      (data: Lesson[]) => {
        this.lessons = data;
      },
      (error) => {
        console.error('Error fetching lessons:', error);
      }
    );
  }
}
