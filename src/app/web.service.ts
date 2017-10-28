import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebService {
  private BASE_URL = 'http://starlord.hackerearth.com/gamesarena';

  constructor(private http: Http) {}

  getData() {
    return this.http.get(this.BASE_URL).map(res => res.json());
  }

}
