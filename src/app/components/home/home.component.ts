import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Array de produtos com imagem, descrição e preço
  products = [
    { name: 'Produto 1', description: 'Descrição do produto 1', price: 100.0, image: 'https://via.placeholder.com/150' },
    { name: 'Produto 2', description: 'Descrição do produto 2', price: 120.0, image: 'https://via.placeholder.com/150' },
    { name: 'Produto 3', description: 'Descrição do produto 3', price: 150.0, image: 'https://via.placeholder.com/150' },
    { name: 'Produto 4', description: 'Descrição do produto 4', price: 180.0, image: 'https://via.placeholder.com/150' },
    { name: 'Produto 5', description: 'Descrição do produto 5', price: 200.0, image: 'https://via.placeholder.com/150' },
    { name: 'Produto 6', description: 'Descrição do produto 6', price: 250.0, image: 'https://via.placeholder.com/150' },
    { name: 'Produto 7', description: 'Descrição do produto 7', price: 300.0, image: 'https://via.placeholder.com/150' },

  ];


  // Método para adicionar produto ao carrinho (funcionalidade pode ser expandida)
  addToCart(product: any) {
    console.log('Produto adicionado ao carrinho:', product);
    // Aqui você pode adicionar a lógica para redirecionar para o carrinho ou salvar no localStorage
    name: product.name;
    description: product.description;
    price: product.price;
    image: product.image;

  }
}
