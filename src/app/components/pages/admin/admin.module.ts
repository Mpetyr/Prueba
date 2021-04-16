import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';


@NgModule({
  declarations: [AdminComponent, SidebarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule.forRoot()
  ],
  exports:[SidebarComponent]
})

export class AdminModule { }
