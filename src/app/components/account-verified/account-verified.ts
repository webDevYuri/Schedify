import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-verified',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './account-verified.html',
  styleUrls: ['./account-verified.css'],
})
export class AccountVerified {}