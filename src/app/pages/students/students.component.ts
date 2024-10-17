import { Component } from '@angular/core';
import { Student } from '../../models/student.interface';
import { StudentService } from '../../services/studentService';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-students',
  standalone: true,
  imports: [TableModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  student: Student[] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      (data: Student[]) => {
        this.student = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }
}
