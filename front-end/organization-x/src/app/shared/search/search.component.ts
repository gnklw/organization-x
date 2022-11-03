import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText = '';

  @Output() searchTextEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewText(text: string) {
    this.searchTextEvent.emit(text);
  }
}
