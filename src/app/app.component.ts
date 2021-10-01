import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchList: string[]= [];


  onSearchAdded(searchName:string){
    this.searchList.push(searchName);
  }

}
