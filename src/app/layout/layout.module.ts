import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    CommonModule,
    RouterModule
  ],
  exports:[LayoutComponent]
  
})
export class LayoutModule { }
