import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'ga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  games: Array<any> = null;
  apiRateLimit: number;
  sortOrder: string;
  titles: Array<string> = [];
  platforms: Array<string> = [];

  constructor (private service: WebService) {}

  ngOnInit () {
    this.service.getData().subscribe(data => {
      this.apiRateLimit = data.shift()['api_rate_limit'];
      this.games = data;
      this.titles = this.games.map(game => game.title);
      this.platforms = this.games.map(game => game.platform);
    });
  }

  sortList () {
    if (this.sortOrder === 'ascending') {
      this.sortOrder = 'descending';
    } else {
      this.sortOrder = 'ascending';
    }
  }
}
