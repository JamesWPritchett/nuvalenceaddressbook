import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PhonebookentrydetailsComponent } from './phonebookentrydetails/phonebookentrydetails.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }, 
  {
    path: 'entries/:username',
    component: PhonebookentrydetailsComponent
  },
  { 
    path: '**', 
    redirectTo: '', 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
