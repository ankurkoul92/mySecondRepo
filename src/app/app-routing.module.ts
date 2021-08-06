import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondGuard } from './guards/second.guard';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'first', component: FirstComponent },
  { path: 'first:empName:empId', component: FirstComponent },
  { path: 'second', component: SecondComponent, canActivate: [SecondGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
