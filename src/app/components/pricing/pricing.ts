import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css'],
})
export class Pricing {
  billingCycle: 'monthly' | 'yearly' = 'monthly';

  private plansData = {
    free: {
      monthlyPrice: 0,
      benefits: [
        '7-day free trial',
        'Set up your booking page',
        'Unlimited bookings',
        'Limited features',
      ],
    },
    pro: {
      monthlyPrice: 29,
      benefits: [
        'Unlimited bookings & clients',
        'Custom booking page link',
        'Automated email notifications',
        'Basic booking analytics',
      ],
    },
    premium: {
      monthlyPrice: 59,
      benefits: [
        'Everything in Pro, plus:',
        'SMS & email reminders',
        'Client profiles',
        'Detailed financial reports',
        'Priority customer support',
      ],
    },
  };

  private formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  }

  getPlan(planName: 'free' | 'pro' | 'premium'): any {
    const plan = this.plansData[planName];
    const monthlyTotal = plan.monthlyPrice * 12;

    if (planName === 'free') {
      return {
        price: this.formatCurrency(0),
        total: `No credit card required`,
        benefits: plan.benefits,
      };
    }

    if (this.billingCycle === 'monthly') {
      return {
        price: this.formatCurrency(plan.monthlyPrice),
        total: `Billed monthly`,
        benefits: plan.benefits,
      };
    } else {
      const yearlyTotal = monthlyTotal * 0.8;
      const perMonthEquivalent = yearlyTotal / 12;
      return {
        price: this.formatCurrency(perMonthEquivalent),
        total: `Billed annually: ${this.formatCurrency(yearlyTotal)}`,
        benefits: plan.benefits,
      };
    }
  }

  setBillingCycle(cycle: 'monthly' | 'yearly') {
    this.billingCycle = cycle;
  }
}