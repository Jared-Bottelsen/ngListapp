import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  titleNotAdded: boolean = false;
  lists = [];

  addList(title: string) {
    if (title !== '') {
      this.lists.push({
        title: title,
        items: [] 
      })
      this.titleNotAdded = false 
    } else {
      this.titleNotAdded = true;
    }
    console.log(this.lists);
  }  

  addItem(item: string, index: number) {
    if (item !== '') {
      this.lists[index].items.push(item);
      console.log(this.lists);
    } else {
      console.log('Add an item to the list thats not blank!');
    }
  }

  deleteList(index: number) {
    this.lists.splice(index, 1);
    console.log(this.lists);
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
