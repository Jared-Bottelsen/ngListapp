import { Component, OnInit } from '@angular/core';
import { features } from 'process';
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
  subsequentItem: boolean = true;
  hide: boolean = false;

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

  newItem() {
    this.subsequentItem = false;
    this.hide = true;
  }

  newItemAdded(newItem: string) {
    if (newItem !== '') {
      this.items.push(new Item(newItem));
      this.subsequentItem = true;
      this.hide = false;  
    } else {
      console.log('We simply cannot have an empty item here bud.');
    }
  }

  newList() {
    this.items = [];
    this.titles = [];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
