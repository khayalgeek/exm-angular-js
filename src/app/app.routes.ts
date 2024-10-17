import { Routes } from '@angular/router';
import { ExamsComponent } from './pages/exams/exams.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { StudentsComponent } from './pages/students/students.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'exams',
                component: ExamsComponent,
            },
            {
                path: 'lessons',
                component: LessonsComponent,
            },
            {
                path: 'students',
                component: StudentsComponent,
            }
        ]
    }
];
