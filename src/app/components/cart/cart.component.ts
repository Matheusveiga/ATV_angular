import { Component } from '@angular/core';


export class CartComponent {
  produto = {
    nome: 'Produto Exemplo',
    imagem: 'https://via.placeholder.com/150',
    precoAVista: 199.99,
    precoParcelado: 229.99
  };

  valorFrete: number | null = null;

  calcularFrete() {
    // Gera um valor de frete aleatório entre 10 e 50 reais
    this.valorFrete = parseFloat((Math.random() * (50 - 10) + 10).toFixed(2));
  }
}

Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})




interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

({
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


