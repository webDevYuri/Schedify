import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css'],
})
export class Pricing {
  billingCycle: 'monthly' | 'yearly' = 'monthly';

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(Number(value.toFixed(2)));
  }

  getPrice(monthly: number): string {
    if (monthly === 0) {
      return this.formatCurrency(0) + ' / month • Total: ' + this.formatCurrency(0);
    }
    if (this.billingCycle === 'monthly') {
      const total = monthly * 12;
      return `${this.formatCurrency(monthly)} / month • Total: ${this.formatCurrency(total)}`;
    } else {
      const yearly = monthly * 12;
      const discounted = yearly * 0.8;
      const perMonthEquivalent = discounted / 12;
      return `${this.formatCurrency(perMonthEquivalent)} / month • Total: ${this.formatCurrency(
        discounted
      )}`;
    }
  }

  getTotal(monthly: number): string {
    if (monthly === 0) {
      return '';
    }
    if (this.billingCycle === 'monthly') {
      const total = monthly * 12;
      return `Total for 12 months: ${this.formatCurrency(total)}`;
    } else {
      const yearly = monthly * 12;
      const discounted = yearly * 0.8;
      return `Billed annually: ${this.formatCurrency(discounted)}`;
    }
  }

  setBillingCycle(cycle: 'monthly' | 'yearly') {
    this.billingCycle = cycle;
  }
}
