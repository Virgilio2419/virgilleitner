import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string = '';
  showLogo: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Ocultar el logo y mostrar el formulario después de 1 segundo (1000 ms)
    setTimeout(() => {
      this.showLogo = false;
    }, 1000); // Tiempo suficiente para la animación
  }

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
