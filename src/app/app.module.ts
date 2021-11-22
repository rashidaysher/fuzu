import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { NavComponent } from './components/auth/nav/nav.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AccountActivationComponent } from './components/auth/account-activation/account-activation.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { StaffComponent } from './components/staff/staff.component';
import { EditStaffComponent } from './components/staff/edit-staff/edit-staff.component';
import { ManageStaffComponent } from './components/staff/manage-staff/manage-staff.component';
import { NewStaffComponent } from './components/staff/new-staff/new-staff.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HumanResourceComponent } from './components/reports/human-resource/human-resource.component';
import { FinanceComponent } from './components/reports/finance/finance.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SelectPlanComponent } from './components/subscription/select-plan/select-plan.component';
import { PaymentDetailsComponent } from './components/subscription/payment-details/payment-details.component';
import { ConfirmPaymentComponent } from './components/subscription/confirm-payment/confirm-payment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SupportComponent } from './components/support/support.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UploadStaffComponent } from './components/staff/upload-staff/upload-staff.component';

import { MpesaComponent } from './components/subscription/mpesa/mpesa.component';
import { MinNavComponent } from './components/subscription/min-nav/min-nav.component';
import { CardPaymentComponent } from './components/subscription/card-payment/card-payment.component';

import { SuccessfullyComponent } from './components/subscription/successfully/successfully.component';
import { PaymentDetails2Component } from './components/subscription/payment-details2/payment-details2.component';

import { ChangepasswordComponent } from './components/auth/changepassword/changepassword.component';
import { OtpComponent } from './components/auth/otp/otp.component';
import { AccountOptionsComponent } from './components/account-options/account-options.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    AccountActivationComponent,
    VerifyEmailComponent,
    StaffComponent,
    EditStaffComponent,
    ManageStaffComponent,
    NewStaffComponent,
    ReportsComponent,
    HumanResourceComponent,
    FinanceComponent,
    SubscriptionComponent,
    SelectPlanComponent,
    PaymentDetailsComponent,
    ConfirmPaymentComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    SupportComponent,

    UploadStaffComponent,

    MpesaComponent,
    MinNavComponent,
    CardPaymentComponent,

    SuccessfullyComponent,
    PaymentDetails2Component,

    ChangepasswordComponent,
    OtpComponent,
    AccountOptionsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
