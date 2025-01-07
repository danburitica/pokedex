# Pokédex

## Descripción

Este proyecto es una implementación de una Pokédex desarrollada con Vue.js. La aplicación permite explorar información detallada de los Pokémon obtenida de la [PokeAPI](https://pokeapi.co/). Incluye funcionalidades como la visualización de detalles de los Pokémon, manejo de favoritos, y opciones para compartir información.

La aplicación está desplegada en [Vercel](https://vercel.com).

---

## Tecnologías Utilizadas

### Frameworks y Herramientas Base

- **Vue.js**
- **Vite**
- **PokeAPI**

### Manejo de Estado

- **Pinia**: Biblioteca para el manejo global del estado, utilizada para gestionar datos como favoritos y Pokémon seleccionados.

### Enrutamiento

- **Vue Router**: Biblioteca para manejar la navegación dentro de la aplicación.

### Estilo y Diseño

- **Bootstrap 5**
- **CSS/SCSS**

### Herramientas Adicionales

- **Axios o Fetch API**: Para realizar solicitudes HTTP a la PokeAPI.
- **LocalStorage**: Para persistir datos como favoritos en el navegador.
- **Git y GitHub**: Para control de versiones y alojamiento del código.
- **Vercel**: Plataforma de despliegue utilizada para publicar la aplicación.

---

## Funcionalidades Clave

1. **Exploración de Pokémon**: Consulta información detallada como peso, altura y tipos.
2. **Manejo de Favoritos**: Permite marcar y desmarcar Pokémon como favoritos.
3. **Compartir Información**: Permite compartir detalles con otros usuarios copiando al portapapeles.
4. **Navegación Dinámica**: Rutas configuradas para acceder a detalles específicos mediante URLs.
5. **Persistencia de Datos**: Favoritos guardados en `localStorage` para mantener el estado entre sesiones.

---

## Instalación y Configuración

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/danburitica/pokedex.git
   ```
2. Navegar al directorio del proyecto:
   ```bash
   cd pokedex
   ```
3. Instalar dependencias:
   ```bash
   npm install
   ```
4. Iniciar el entorno de desarrollo:
   ```bash
   npm run dev
   ```

---

## Despliegue

El proyecto está desplegado en Vercel y puedes acceder a la versión en vivo [aqui](https://vercel.com).

---

## Mejoras Futuras

1. **Pruebas Unitarias**: Implementar pruebas para garantizar la estabilidad del proyecto.
2. **Optimización de Rendimiento**: Implementar lazy loading y pre-fetching para mejorar la experiencia del usuario.
3. **Accesibilidad**: Asegurar el cumplimiento de las pautas de accesibilidad web.
