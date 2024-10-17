import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Exam } from '../../models/exam.interface';
import { ExamService } from '../../services/examService';
import moment from 'moment';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [TableModule],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export class ExamsComponent implements OnInit {
  exams:Exam[]=[]
  
  constructor(private examService: ExamService) { }

  ngOnInit() {
    this.examService.getExams().subscribe(
      (data: Exam[]) => {
        this.exams = data;
      },
      (error) => {
        console.error('Error fetching exams:', error);
      }
    );
  }
  
  formatDate(seconds: number): string {
    return moment.unix(seconds).format('YYYY-MM-DD');
  }
}
