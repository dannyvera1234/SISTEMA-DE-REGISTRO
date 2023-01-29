import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { LoginformComponent } from './components/auth/loginform/loginform.component';
import { RegisterformComponent } from './components/auth/registerform/registerform.component';
import { NavbarComponent } from './components/nav/navbar/navbar.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LaginpageComponent } from './components/pages/laginpage/laginpage.component';
import { RegisterpageComponent } from './components/pages/registerpage/registerpage.component';
import { NotFOUNDpageComponent } from './components/pages/not-foundpage/not-foundpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    TaskFormComponent,
    LoginformComponent,
    RegisterformComponent,
    NavbarComponent,
    HomepageComponent,
    LaginpageComponent,
    RegisterpageComponent,
    NotFOUNDpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
