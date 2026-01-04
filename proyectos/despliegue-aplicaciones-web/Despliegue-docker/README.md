# Despliegue de aplicación web con Docker

Este proyecto consiste en el despliegue de una aplicación web sencilla utilizando Docker y Docker Compose.  
El objetivo principal es aprender cómo se puede ejecutar una aplicación web sin necesidad de instalar manualmente un servidor web o PHP en el ordenador.

El proyecto está pensado como un ejercicio de iniciación al despliegue de aplicaciones web.

---

Objetivo del proyecto :

El objetivo de este trabajo es:

- Entender qué es Docker y para qué se utiliza
- Aprender a usar Docker Compose
- Crear un entorno web usando contenedores
- Separar el servidor web (Nginx) del lenguaje de servidor (PHP)
- Acceder a la aplicación desde el navegador

---

Tecnologías utilizadas :

- Docker
- Docker Compose
- Nginx
- PHP 8.2
- Git y GitHub

--- 
- **nginx/**: contiene la configuración personalizada del servidor web Nginx.
- **php/**: contiene el Dockerfile necesario para crear el contenedor de PHP.
- **src/**: contiene el código de la aplicación web.
- **index.php**: archivo de prueba que muestra información de PHP.
- **docker-compose.yml**: archivo que define y conecta los contenedores.
- **.env**: archivo de variables de entorno para la configuración del proyecto.

---

Este proyecto permite entender de forma práctica cómo se puede desplegar una aplicación web utilizando Docker y Docker Compose, aplicando una arquitectura sencilla pero similar a la utilizada en entornos reales.
