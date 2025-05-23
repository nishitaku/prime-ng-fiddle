import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';

@Component({
  selector: 'app-steps-page',
  imports: [StepsModule, RouterOutlet],
  templateUrl: './steps-page.component.html',
  styleUrl: './steps-page.component.scss',
})
export class StepsPageComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Personal',
        routerLink: 'personal',
      },
      {
        label: 'Seat',
        routerLink: 'seat',
      },
      {
        label: 'Payment',
        routerLink: 'payment',
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation',
      },
    ];
  }
}
