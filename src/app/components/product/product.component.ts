import { Component } from '@angular/core';
import { PRODUCTS } from '../../constant/mock-products';
import { Product } from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 
	products: Product[] = PRODUCTS;
}
