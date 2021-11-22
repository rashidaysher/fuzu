import { SupportComponent } from './components/support/support.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { ChangepasswordComponent } from './components/auth/changepassword/changepassword.component';
import { OtpComponent } from './components/auth/otp/otp.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AccountActivationComponent } from './components/auth/account-activation/account-activation.component';
import { MpesaComponent } from './components/subscription/mpesa/mpesa.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStaffComponent } from './components/staff/edit-staff/edit-staff.component';
import { ManageStaffComponent } from './components/staff/manage-staff/manage-staff.component';
import { StaffComponent } from './components/staff/staff.component';
import { NewStaffComponent } from './components/staff/new-staff/new-staff.component';
import { UploadStaffComponent } from './components/staff/upload-staff/upload-staff.component';

import { SelectPlanComponent } from './components/subscription/select-plan/select-plan.component';
import { ConfirmPaymentComponent } from './components/subscription/confirm-payment/confirm-payment.component';
import { MinNavComponent } from './components/subscription/min-nav/min-nav.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthComponent } from './components/auth/auth.component';

import { ReportsComponent } from './components/reports/reports.component';

import { PaymentDetailsComponent } from './components/subscription/payment-details/payment-details.component';
import { SuccessfullyComponent } from './components/subscription/successfully/successfully.component';

import { RegisterComponent } from './components/auth/register/register.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';

import { AccountOptionsComponent } from './components/account-options/account-options.component';


const routes: Routes = [
  { path: 'staff', component: StaffComponent},
  { path: 'manage', component: ManageStaffComponent},
  { path: 'table', component: EditStaffComponent},
  { path: 'new', component: NewStaffComponent},
  { path: 'upload', component: UploadStaffComponent},
  { path: 'register', component: RegisterComponent},

  { path: '', component: AuthComponent},
  { path: '', component: RegisterComponent},
  { path: 'activation', component: AccountActivationComponent},
  { path: 'verifyemail', component: VerifyEmailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'otp', component: OtpComponent},
  { path: 'change_password', component: ChangepasswordComponent},

  { path: 'payment-details', component: PaymentDetailsComponent},
  { path: 'confirm-payment', component: ConfirmPaymentComponent},
  { path: 'successfully', component: SuccessfullyComponent},
  { path: 'min-nav', component: MinNavComponent},


 { path: 'auth', component: AuthComponent},


  { path: 'subscription', component:SubscriptionComponent},

  {path: 'mpesa', component: MpesaComponent},
  
  
  { path: 'nav', component: NavbarComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'mpesa', component: MpesaComponent},
  { path: 'subscription', component: SubscriptionComponent},
  { path: 'support', component: SupportComponent},
  { path: 'account_options', component: AccountOptionsComponent},



    
  { path: 'side', component: SidebarComponent},


  { path: 'report', component: ReportsComponent},
  
];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
