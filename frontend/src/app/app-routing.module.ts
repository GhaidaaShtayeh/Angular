import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddInvoiceItemComponent } from './add-invoice-item/add-invoice-item.component';
import { InvoiceItemComponent } from './invoice-item/invoice-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemsComponent } from './items/items.component';
import { RegisterComponent } from './register/register.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoginComponent } from './login/login.component';
import { HomeSuperuserComponent } from './home-superuser/home-superuser.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { InvoicesHistoryComponent } from './invoices-history/invoices-history.component';
import { EditQuantityComponent } from './edit-quantity/edit-quantity.component';
import { HomeAudtiorComponent } from './home-audtior/home-audtior.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  {path: '' , component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'invoics', component: InvoicesComponent },
  {path: 'update-invoice/:id',component:UpdateInvoiceComponent},
  {path: 'customer',component:CustomersComponent},
  {path: 'customer/add',component:AddCustomerComponent},
  {path: 'invoices/add',component:AddInvoiceComponent},
  {path: 'dashboread',component:HomeSuperuserComponent},
  {path: 'item',component:ItemsComponent},
  {path:'item/add',component:AddItemComponent},
  {path:'invoicehistory/:id',component:InvoicesHistoryComponent},
  {path:'invoice-item/:id',component:InvoiceItemComponent},
  {path:'add-invoice-item/:id',component:AddInvoiceItemComponent},
  {path:'edit-quantity/:id',component:EditQuantityComponent},
  {path:'home/auditor',component:HomeAudtiorComponent},
  {path:'home/user',component:HomeUserComponent},
  {path:'employee',component:UsersComponent},
  {path:'edit-user/:id',component:EditUserComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'customer/edit/:id',component:EditCustomerComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routingcomponent = [RegisterComponent , LoginComponent ]
