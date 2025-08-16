import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.html'
})
export class Footer {
  currentYear = new Date().getFullYear(); // define a property for the year
}
