import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Cart } from '@angular/core';


// Parte logica do Formulario 
@Cart({
  selector: 'app-frete-produto',
  templateUrl: './frete-produto.component.html',
  styleUrls: ['./frete-produto.component.css']
})
export class FreteProdutoComponent {
  endereco: string = '';
  numero: string = '';
  cep: string = '';
  cidade: string = '';
  estado: string = '';
  freteMessage: string = '';
  quantidade: number = 1;

  calcularFrete() {
    const valorFrete = Math.floor(Math.random() * 100) + 1; // Valor aleatório entre 1 e 100
    this.freteMessage = `Valor do frete: R$ ${valorFrete},00`;
  }

  comprar() {
    alert(`Você comprou ${this.quantidade} unidade(s) do produto!`);
  }
}





























@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}

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


