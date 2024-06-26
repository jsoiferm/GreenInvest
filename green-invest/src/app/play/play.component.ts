import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-play',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './play.component.html',
    styleUrl: './play.component.css'
})
export class PlayComponent {
    title = 'green-invest';
}