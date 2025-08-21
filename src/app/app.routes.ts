import { Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

import { Home } from './components/home/home';
import { Pricing } from './components/pricing/pricing';
import { Features } from './components/features/features';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';
import { TermsConditions } from './components/terms-conditions/terms-conditions';
import { RefundPolicy } from './components/refund-policy/refund-policy';
import { Signin } from './components/signin/signin';
import { Signup } from './components/signup/signup';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { ResetPassword } from './components/reset-password/reset-password';
import { AccountVerified } from './components/account-verified/account-verified';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home, data: { title: 'Schedify | Home' } },
      { path: 'pricing', component: Pricing, data: { title: 'Schedify | Pricing' } },
      { path: 'features', component: Features, data: { title: 'Schedify | Features' } },
      { path: 'privacy-policy', component: PrivacyPolicy, data: { title: 'Schedify | Privacy Policy' } },
      { path: 'terms-conditions', component: TermsConditions, data: { title: 'Schedify | Terms & Conditions' } },
      { path: 'refund-policy', component: RefundPolicy, data: { title: 'Schedify | Refund Policy' } },
    ]
  },
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'sign-in', component: Signin, data: { title: 'Schedify | Sign In' } },
      { path: 'sign-up', component: Signup, data: { title: 'Schedify | Sign Up' } },
      { path: 'forgot-password', component: ForgotPassword, data: { title: 'Schedify | Forgot Password' } },
      { path: 'reset-password', component: ResetPassword, data: { title: 'Schedify | Reset Password' } },
      { path: 'account-verified', component: AccountVerified, data: { title: 'Schedify | Account Verified' } }
    ]
  }
];
