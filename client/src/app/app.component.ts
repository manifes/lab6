import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  drugList: any;
  typesList: any;
  manufList: any;
  detailsId: number;
  filterManuf: string;
  filterType: string;
  filterSearch: string;
  fromPrice: number;
  toPrice: number;

  title = 'drugs-client';
  messages = [1, 2, 3, 4, 5, 6, 7];

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.http.get(`http://localhost/drugs/v1/drugs-list`).subscribe(data => {
      console.log("GET!!!");
      console.log(data);
      data = data['data'];
      this.typesList = [];
      this.manufList = [];
      // Read the result field from the JSON response.
      for (let i in data) {
        if (this.typesList.indexOf(data[i].type) === -1) {
          this.typesList.push(data[i].type);
        }
        if (this.manufList.indexOf(data[i].manufacturer) === -1) {
          this.manufList.push(data[i].manufacturer);
        }
      }
      console.log("Types >>>>", this.typesList);
      console.log("MANUF >>>>", this.manufList);
      this.drugList = data;
    });
  }

  openDetails(id) {
    if (this.detailsId === id) {
      this.detailsId = -1;
    } else {
      this.detailsId = id;
    }
  }
}
