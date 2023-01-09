import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
    id: 1,
    name: "Minimalists Analog Watch",
    price: '109',
    color: 'Black',
    available: 'Available',
    image: '/assets/products/empty-jar.PNG',
    } ,
    {
    id: 2,
    name: "Hisense Ultra HD Smart TV",
    price: '3339',
    color: 'Black',
    available: 'Available',
    image: '/assets/products/empty-jar.PNG',
    },
    {
    id: 3,
    name: "APPLE iPhone 12",
    price: '1855',
    color: 'Black',
    available: 'Not Available',
    image: '/assets/products/empty-jar.PNG',
    },
  ]

  currentFilterValue: string = 'All';
  searchedText: string = '';

  getTotalProducts(){
    return this.products.length;
  }

  getTotalAvailableProducts(){
    return this.products.filter(product => product.available === 'Available').length;
  }

  getTotalNotAvailableProducts(){
    return this.products.filter(product => product.available === 'Not Available').length;
  }

  filterProducts(filter: string){
   this.currentFilterValue = filter;
  }

  onSearchedText(text:string){
    this.searchedText = text;
  }
}
