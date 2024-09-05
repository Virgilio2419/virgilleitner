import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  userName: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.userName) {
      // Guardar el nombre del usuario en el almacenamiento local o en un servicio
      localStorage.setItem('userName', this.userName);
      this.router.navigate(['/home']); // Redirigir a la página de inicio
    } else {
      alert('Por favor, ingresa tu nombre.');
    }
  }
}