import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() newSearch = new EventEmitter<string>();
  searchName = "";

  constructor() { }

  ngOnInit(): void {
  }

  addSearch() {
    this.newSearch.emit(this.searchName)
    }


}
