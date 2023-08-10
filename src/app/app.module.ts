import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FormsModule } from '@angular/forms';
import { ElementcolorDirective } from './directive/elementcolor.directive';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpRequestInterceptor } from './services/http.interceptor';
import { ShortenPipe } from './pipes/shortenlen.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CourseDetailsComponent,
    ElementcolorDirective,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : HttpRequestInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
