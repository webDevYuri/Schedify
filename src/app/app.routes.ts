import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Pricing } from './components/pricing/pricing';
import { Features } from './components/features/features';
import { Contact } from './components/contact/contact';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';
import { TermsConditions } from './components/terms-conditions/terms-conditions';
import { RefundPolicy } from './components/refund-policy/refund-policy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pricing', component: Pricing },
  { path: 'features', component: Features },
  { path: 'contact', component: Contact },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'terms-conditions', component: TermsConditions },
  { path: 'refund-policy', component: RefundPolicy }
];
