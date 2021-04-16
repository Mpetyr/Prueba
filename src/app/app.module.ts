import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule} from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerModule } from './shared/components/spinner/spinner.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { SpinnerInterceptor } from './shared/components/interceptors/spinner.interceptor';

import { ReactiveFormsModule } from '@angular/forms';
import { PagesService } from './components/pages/services/pages.service';
import { CanAdminGuard } from './components/guard/can-admin.guard';
import { EmployeeFormComponent } from './shared/components/employee-form/employee-form.component';
import { EmployeeFormModule } from './shared/components/employee-form/employee-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpinnerModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    EmployeeFormModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true,},
    PagesService,
    CanAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
