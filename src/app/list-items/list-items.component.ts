import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { Title } from './title.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  items: Item[] = [];
  titles: Title[] = [];
  titleAdded: boolean = false;

  addItem(newItem: string) {
    if (newItem !== '') {
      this.items.push(new Item(newItem));
    } else {
      console.log('Bruh, thats an empty list item, thats not gonna fly here!');
    }
  }

  addTitle(newTitle: string) {
    if(newTitle !== '') {
      this.titles.push(new Title(newTitle));
      this.titleAdded = true;
    } else {
      console.log('Dude, Why are you trying to enter a blank title my Guy??');
    }
  }

  newList() {
    this.items = [];
    this.titles = [];
    this.titleAdded = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
