import { ISettings } from './../../../server/src/app.interface';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  settings: ISettings;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getTitle();
  }
  private getTitle(): void {
    this.http
      .get<ISettings>('/api/settings')
      .subscribe(settings => (this.settings = settings));
  }
}
