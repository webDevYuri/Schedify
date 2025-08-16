import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Pricing } from './components/pricing/pricing';
import { Features } from './components/features/features';
import { Contact } from './components/contact/contact';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';
import { TermsConditions } from './components/terms-conditions/terms-conditions';
import { RefundPolicy } from './components/refund-policy/refund-policy';

export const routes: Routes = [
  { path: '', component: Home, data: { title: 'Schedify | Home' } },
  { path: 'pricing', component: Pricing, data: { title: 'Schedify | Pricing' } },
  { path: 'features', component: Features, data: { title: 'Schedify | Features' } },
  { path: 'contact', component: Contact, data: { title: 'Schedify | Contact' } },
  { path: 'privacy-policy', component: PrivacyPolicy, data: { title: 'Schedify | Privacy Policy' } },
  { path: 'terms-conditions', component: TermsConditions, data: { title: 'Schedify | Terms & Conditions' } },
  { path: 'refund-policy', component: RefundPolicy, data: { title: 'Schedify | Refund Policy' } }
];