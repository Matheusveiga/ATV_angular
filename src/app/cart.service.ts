import { Injectable } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  constructor() {}

  // Adicionar item ao carrinho
  addToCart(item: CartItem): void {
    const foundItem = this.cart.find((cartItem) => cartItem.id === item.id);
    if (foundItem) {
      foundItem.quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
  }

  // Obter todos os itens no carrinho
  getCartItems(): CartItem[] {
    return [...this.cart];
  }

  // Calcular o total do carrinho
  getCartTotal(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
