import { Component, OnInit} from '@angular/core';

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
        items: [],
        itemInputVisible: true,
        listItemNotAdded: false
      })
      this.titleNotAdded = false 
    } else {
      this.titleNotAdded = true;
    }
  }  

  addItem(item: string, listIndex: number) {
    if (item !== '') {
      this.lists[listIndex].items.push({
        item: item,
        quantity: 0, 
        editEnable: false, 
        showButtons: false, 
        itemEditNotEntered: false});
      this.lists[listIndex].listItemNotAdded = false;
    } else {
      console.log('Add an item to the list thats not blank!');
      this.lists[listIndex].listItemNotAdded = true;
    }
  }

  showButtonGroup(listIndex: number, itemIndex: number){
    this.lists[listIndex].items[itemIndex].showButtons = true;
 }

  hideButtonGroup(listIndex: number, itemIndex: number){
    this.lists[listIndex].items[itemIndex].showButtons = false;
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

  editItem(listIndex: number, itemIndex: number, itemEdit: string) {
    if (itemEdit !== '') {
      this.lists[listIndex].items[itemIndex].item = itemEdit;
      this.lists[listIndex].items[itemIndex].editEnable = false;
      this.lists[listIndex].items[itemIndex].showButtons = false;
      this.lists[listIndex].itemInputVisible = true;
      this.lists[listIndex].items[itemIndex].itemEditNotEntered = false;
    } else {
      console.log('Thats a blank edit my guy, make a true edit here!');
      this.lists[listIndex].items[itemIndex].itemEditNotEntered = true;
    }
  } 

  cancelEdit(listIndex: number, itemIndex: number) {
    this.lists[listIndex].items[itemIndex].editEnable = false;
    this.lists[listIndex].itemInputVisible = true;
    this.lists[listIndex].items[itemIndex].showButtons = false;
    this.lists[listIndex].items[itemIndex].itemEditNotEntered = false;
  }

  deleteList(index: number) {
    this.lists.splice(index, 1);
  }

  deleteItem(listIndex: number, itemIndex: number) {
    this.lists[listIndex].items.splice(itemIndex, 1);
    this.lists[listIndex].itemInputVisible = true;
  }

 constructor() {

 }

 ngOnInit() {

 }

}
