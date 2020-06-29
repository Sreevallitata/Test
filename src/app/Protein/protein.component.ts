// @ts-ignore
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import {HttpClient} from '@angular/common/http';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-protein',
  templateUrl: './protein.component.html',
  styleUrls: ['./protein.component.css']
})
export class ProteinComponent {
  @ViewChild('whey') private wheyBox;     // get the checkbox elements
  @ViewChild('plant') private plantBox;
  @ViewChild('bar') private barBox;

  choiceList = [];              // holds user choices
  foodList = [];                // holds returned values from EDAMAM API

  EDAMAMID: string;
  EDAMAMKey: string;

  constructor(private _http: HttpClient) {
  }



  getVenues() {

    this.EDAMAMID = '3dbb91ea';
    this.EDAMAMKey = 'a79d8c55e22615e2639fe70be9f9cc76';

    this.choiceList = []; // clear choices list
    this.foodList = []; // clear results list

    // get current checbox values and add to choices list
    this.wheyBox = <HTMLInputElement> document.getElementById('Whey Protein Powder');
    if(this.wheyBox.checked) {
      this.choiceList.push("Whey Protein Powder");
    } else { this.choiceList.push("");}
    this.plantBox = <HTMLInputElement> document.getElementById('Plant-based Protein Powder');
    if(this.plantBox.checked) {
      this.choiceList.push("Plant-Based Protein Powder");
    } else { this.choiceList.push("");}
    this.barBox = <HTMLInputElement> document.getElementById('Protein Bars');
    if(this.barBox.checked) {
      this.choiceList.push("Protein Bars");
    } else { this.choiceList.push("");}

    console.log(this.choiceList);
    // setup EDAMAM API call, 5 results
    if (this.choiceList !== null) {
      this._http.get('https://api.edamam.com/search?q=' + this.choiceList[0] + '%20' + this.choiceList[1] + '%20' +
        this.choiceList[2] + '&app_id=' + this.EDAMAMID + '&app_key=' + this.EDAMAMKey + '&from=0&to=5')
        .subscribe((data: any) => {
          console.log(data);
          this.foodList = Object.keys(data.hits).map(function (k) {        // references hits in API response
            const r = data.hits[k].recipe;
            return {name: r.label, url: r.url, ingredients: r.ingredients, nutrients: r.totalNutrients};
          });                                                              // assign needed data to properties
          console.log('Food retrieved.');
          console.log(this.foodList);
        });
    }
  }
}
