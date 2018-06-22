import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserComponent} from '../app/module/assignment_1/user';
import { dashBoardComponent } from '../app/module/dashboard/dashboard';
import { HttpModule } from '@angular/http';
// import { userService } from '../app/_service/user-service';
import { AppComponent } from './app.component';
import { Routes, RouterModule  } from '@angular/router';
import { homeComponent } from '../app/module/home/home';
import { FormsModule }   from '@angular/forms';
export const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'home', component: homeComponent },
  { path: 'dashboard/:email:password', component: dashBoardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  // { path: '**', component: pageNotFound }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    homeComponent,
    dashBoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
