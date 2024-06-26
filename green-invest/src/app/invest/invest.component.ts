import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-invest',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './invest.component.html',
    styleUrl: './invest.component.css'
})
export class InvestComponent {
    title = 'green-invest';
}