import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from '../navbar/navbar.component';


interface Proyecto {
  titulo: string;
  descripcion: string;
  Tecnologias: string;
  imagenes: string[]; // Array de imágenes
}

@Component({
  selector: 'app-mis-proyectos',
  imports: [CommonModule, FooterComponent, NavbarComponent],
  templateUrl: './mis-proyectos.component.html',
  styleUrl: './mis-proyectos.component.css'
})

export class MisProyectosComponent {

   isLoading = false;
  public selectevent: Proyecto | null = null;
  public isOpen = false;
  public images: string[] = [];
  public currentImageIndex = 0;




 public proyectos = [
      {
        titulo: 'Café Blog',
        descripcion: 'Proyecto desarrollado exclusivamente con HTML y CSS, enfocado en la creación de una página web estática con un diseño limpio y responsivo. Se implementaron diferentes propiedades de display y Flexbox para estructurar el contenido de manera eficiente. Además, se estableció una navegación fluida mediante rutas internas, permitiendo el acceso a distintas secciones del sitio sin el uso de JavaScript. Ideal para demostrar la aplicación de estilos modernos y buenas prácticas en desarrollo web.',
       Tecnologias:'HTML y CSS.' ,
        imagenes: [
          'assets/bog_cafe/BlogDeCafe-1.jpg',
          'assets/bog_cafe/BlogDeCafe-2.jpg',
          'assets/bog_cafe/BlogDeCafe-3.jpg',
         
         
         
        ],
      },
      {
        titulo: 'Freelancer ',
        descripcion: 'Página estática e informativa desarrollada en html y css donde se muestra contenido sin funcionalidades dinámicas. ',
       Tecnologias: 'HTML y CSS.',
        imagenes: [
        'assets/freelancer/Screenshot.png',
         
        ],
      },
      {
        titulo: 'Festival de musica',
        descripcion: 'Página web estática e informativa para un festival de música, desarrollada con HTML y CSS. Se implementó un diseño atractivo con un sistema de boletos estilizados en CSS, una galería de fotos en grid y una sección de videos integrados para mejorar la experiencia visual del usuario.',
       Tecnologias: 'HTML, CSS (Flexbox y Grid).',
        imagenes: [
          'assets/festivalmusica-FIN/music-2.jpg',
          'assets/festivalmusica-FIN/musica-1.jpg',
          'assets/festivalmusica-FIN/musica-3.jpg',
          'assets/festivalmusica-FIN/screem.jpg'
         
        ],
      },
      {
          titulo: 'gym',
          descripcion: 'Gym Management System es una aplicación web desarrollada para gestionar tanto la parte administrativa como la experiencia del usuario en un gimnasio. Este sistema cuenta con dos vistas principales: una para los administradores y otra para los usuarios. La vista de usuario permite gestionar la cuenta personal, ver entrenamientos disponibles, programar sesiones y consultar el historial de actividades realizadas. Por otro lado, la vista de administrador ofrece herramientas para gestionar usuarios, actualizar los datos del gimnasio y monitorizar las actividades de los miembros. El sistema incluye un CRUD completo (Crear, Leer, Actualizar, Eliminar) para usuarios y entrenamientos, lo que facilita la administración de todos los datos. No se ha utilizado ningún framework de diseño como Bootstrap; todo el diseño fue creado utilizando CSS para ofrecer una interfaz completamente personalizada. Además, el sistema está respaldado por una base de datos MongoDB, que garantiza la escalabilidad y el almacenamiento eficiente de los datos..',
       Tecnologias: 'angular,mongoDB,css,html,node.js .',
          imagenes: [
           'assets/gym/1.jpg',
           'assets/gym/2.jpg',
           'assets/gym/3.jpg',
           'assets/gym/4.jpg',
          'assets/gym/5.jpg',
           
          ],
        },
        {
          titulo: 'Inmobiliaria',
          descripcion: 'Panel administrativo interactivo con gráficos y estadísticas.',
       Tecnologias :'React, Chart.js.',
          imagenes: [
           'assets/inmobiliaria/1.jpg',
           'assets/inmobiliaria/2.jpg',
           'assets/inmobiliaria/3.jpg',
           'assets/inmobiliaria/4.jpg',
           'assets/inmobiliaria/5.jpg',
           'assets/inmobiliaria/6.jpg',
           
          ],
        },
        
    ];

  

    evento(proyecto: Proyecto) {
      this.selectevent = proyecto;
      console.log(this.isOpen);
      this.isOpen = true;
      this.currentImageIndex = 0;
    }
    

closeModal() {
this.isOpen = false;
}

nextImage() {
if (this.selectevent?.imagenes && this.selectevent.imagenes.length > 0) {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.selectevent.imagenes.length;
}
}

prevImage() {
if (this.selectevent?.imagenes && this.selectevent.imagenes.length > 0) {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.selectevent.imagenes.length) % this.selectevent.imagenes.length;
}
}

menuOpen = false;

toggleMenu() {
this.menuOpen = !this.menuOpen;
}

closeMenu() {
this.menuOpen = false;
}


}
