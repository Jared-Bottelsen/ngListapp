import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  titleNotAdded: boolean = false;
  listItemNotAdded: boolean = false;
  itemEditNotEntered: boolean = false;
  editActive: boolean = false;
  lists = [];
  // isDisplay: boolean = false;

  addList(title: string) {
    if (title !== '') {
      this.lists.push({
        title: title,
        items: [],
        itemInputVisible: true
      })
      this.titleNotAdded = false 
      console.log(this.lists);
    } else {
      this.titleNotAdded = true;
    }
  }  

  addItem(item: string, listIndex: number) {
    if (item !== '') {
      this.lists[listIndex].items.push({item: item, quantity: 0, editEnable: false, showButtons: false});
      console.log(this.lists);
      this.listItemNotAdded = false;
    } else {
      console.log('Add an item to the list thats not blank!');
      this.listItemNotAdded = true;
    }
  }

  increaseQuantity(listIndex: number, itemIndex: number) {
    this.lists[listIndex].items[itemIndex].quantity += 1;
  }

  decreaseQuantity(listIndex: number, itemIndex: number) {
    if (this.lists[listIndex].items[itemIndex].quantity > 0) {
      this.lists[listIndex].items[itemIndex].quantity -= 1;
    } 
  }

  showEdit(listIndex: number, itemIndex: number) {
    this.lists[listIndex].items[itemIndex].editEnable = true;
    this.lists[listIndex].itemInputVisible = false;
  }

  cancelEdit(listIndex: number, itemIndex: number) {
    this.lists[listIndex].items[itemIndex].editEnable = false;
    this.lists[listIndex].itemInputVisible = true;
    this.lists[listIndex].items[itemIndex].showButtons = false;
    this.itemEditNotEntered = false;
  }

  editItem(listIndex: number, itemIndex: number, itemEdit: string) {
    if (itemEdit !== '') {
      this.lists[listIndex].items[itemIndex].item = itemEdit;
      this.lists[listIndex].items[itemIndex].editEnable = false;
      this.lists[listIndex].items[itemIndex].showButtons = false;
      this.lists[listIndex].itemInputVisible = true;
      this.itemEditNotEntered = false;
    } else {
      console.log('Thats a blank edit my guy, make a true edit here!');
      this.itemEditNotEntered = true;
    }
  } 

  deleteList(index: number) {
    this.lists.splice(index, 1);
  }

  deleteItem(listIndex: number, itemIndex: number) {
    this.lists[listIndex].items.splice(itemIndex, 1);
    this.lists[listIndex].itemInputVisible = true;
  }

  mouseEnterDiv(listIndex: number, itemIndex: number){
    this.lists[listIndex].items[itemIndex].showButtons = true;
 }

  mouseLeaveDiv(listIndex: number, itemIndex: number){
    this.lists[listIndex].items[itemIndex].showButtons = false;
 }

 
  constructor() { }

  ngOnInit(): void {
  }

}
