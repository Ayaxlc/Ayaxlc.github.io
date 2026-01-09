👟 StepUpStore

Aplicación web de comercio electrónico
Proyecto del módulo Desarrollo Web en Entorno Servidor (DAW)

📄 Descripción

StepUpStore es una aplicación web desarrollada con PHP y MySQL que simula el funcionamiento real de una tienda online.

El objetivo principal del proyecto es practicar el desarrollo en entorno servidor, trabajando con sesiones, roles de usuario y base de datos.

La aplicación diferencia entre clientes y administrador, mostrando funcionalidades distintas según el tipo de usuario.

🧩 Funcionalidades
👤 Cliente

Inicio y cierre de sesión

Visualización de productos

Añadir productos al carrito

Eliminar productos del carrito

Vaciar carrito

Finalizar compra

Consultar pedidos

🔐 Administrador

Gestión de productos

Eliminación de productos

Gestión de usuarios

Eliminación de usuarios de tipo cliente

El administrador no puede ser eliminado

🏗️ Arquitectura

La aplicación está organizada siguiendo una arquitectura en tres capas:

Capa de presentación → Vistas e interfaz en PHP

Capa de lógica de negocio → Gestión de sesiones, carrito y pedidos

Capa de acceso a datos → Conexión y consultas a MySQL

🗄️ Base de datos

La base de datos está desarrollada en MySQL e incluye las siguientes tablas:

usuarios

productos

pedidos

detalle_pedido

🧪 Pruebas

El funcionamiento del proyecto se demuestra mediante vídeos de pruebas, donde se muestran los distintos casos de uso:

Acceso como cliente

Acceso como administrador

Gestión de productos, usuarios y carrito

Los enlaces a los vídeos se incluyen en la memoria del proyecto.

🛠️ Tecnologías utilizadas

PHP

MySQL

HTML5

CSS

Sesiones PHP

👨‍💻 Autor

Áyax López Camps
Estudiante de Desarrollo de Aplicaciones Web (DAW)
