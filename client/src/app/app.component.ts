import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchComponent } from './components/search.component';
import { DisplayComponent } from './components/display.component';
import { Game } from './models';
import { BGGService } from './bgg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  games: Game[] = []

  onResults(games: Game[]) {
    this.games = games
  }
}
