import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [require('./app.css')]
})

export default class App {
  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this._http = http;
  }

  ngOnInit() {
      this.getEvents()
      .subscribe(x => this.events = x);
  }

  getEvents() {
      const url = 'http://localhost:3000/api/events';
      return this._http.get(url)
          .map(x => x.json());
  }
};
