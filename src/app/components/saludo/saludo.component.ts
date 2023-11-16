import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.scss'
})
export class SaludoComponent {
  usuario: string = "Leo";
  post: string = "Es un ejemplo de un post";
  likes: number = 550;
}
