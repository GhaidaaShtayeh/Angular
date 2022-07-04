import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { InvoicesComponent } from './invoices/invoices.component';
import { LoginComponent } from './login/login.component';
import { HomeSuperuserComponent } from './home-superuser/home-superuser.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ItemsComponent } from './items/items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { InvoicesHistoryComponent } from './invoices-history/invoices-history.component';
import { InvoiceItemComponent } from './invoice-item/invoice-item.component';
import { AddInvoiceItemComponent } from './add-invoice-item/add-invoice-item.component';
import { EditQuantityComponent } from './edit-quantity/edit-quantity.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomeAudtiorComponent } from './home-audtior/home-audtior.component';
import { HomeUserComponent } from './home-user/home-user.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    InvoicesComponent,
    LoginComponent,
    HomeSuperuserComponent,
    CustomersComponent,
    AddCustomerComponent,
    AddInvoiceComponent,
    UpdateInvoiceComponent,
    NavBarComponent,
    ItemsComponent,
    AddItemComponent,
    InvoicesHistoryComponent,
    InvoiceItemComponent,
    AddInvoiceItemComponent,
    EditQuantityComponent,
    HomeAudtiorComponent,
    HomeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: ['localhost:8085'],
        disallowedRoutes:['localhost:8085/login']
      }
    }),
    Ng2SearchPipeModule

    ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]

})
export class AppModule { }
