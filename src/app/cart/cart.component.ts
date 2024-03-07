import { Component } from '@angular/core';
import { CartService } from '../cart.service'; //accessing CartService class
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items = this.cartService.getItems()

  // use group() to form a model with different fields
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  onSubmit(): void {
    // process checkout data
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    console.log(this.checkoutForm.value.name);
    this.checkoutForm.reset();
  }

  constructor( 
    // while making a new instance of this cart component
    // and determines that it needs CartService
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}
}

