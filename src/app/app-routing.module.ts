import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './form/register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { NewcompanyComponent } from './newcompany/newcompany.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { IpoComponent } from './ipo/ipo.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { ImportdataComponent } from './importdata/importdata.component';
import { AddipoComponent } from './addipo/addipo.component';
import { UpdateIpoComponent } from './update-ipo/update-ipo.component';
import { CompaniesComponent } from './companies/companies.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { CompareSectorComponent } from './compare-sector/compare-sector.component';
import { UserLandingComponent } from './user-landing/user-landing.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"users",component:UsersComponent},
  {path:"newcompany",component:NewcompanyComponent},
  {path:"update-user",component:UpdateUserComponent},
  {path:"ipo",component:IpoComponent},
  {path:"stockprice",component:StockpriceComponent},
  {path:"importdata",component:ImportdataComponent},
  {path:"addipo",component:AddipoComponent},
  {path:"update-ipo",component:UpdateIpoComponent},
  {path:"ipos",component:IpoComponent},
  {path:"companies",component:CompaniesComponent},
  {path:"adminlanding",component:AdminlandingComponent},
  {path:"managecompany",component:ManageCompaniesComponent},
  {path:"comparesector",component:CompareSectorComponent},
  {path:"userlanding",component:UserLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
