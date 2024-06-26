import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-leaderboard',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './leaderboard.component.html',
    styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
    title = 'green-invest';
}