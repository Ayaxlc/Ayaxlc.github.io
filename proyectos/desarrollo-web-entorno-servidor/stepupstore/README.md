👟 StepUpStore

StepUpStore es una aplicación web de comercio electrónico desarrollada en PHP y MySQL como proyecto académico del módulo Desarrollo Web en Entorno Servidor del ciclo formativo de Desarrollo de Aplicaciones Web (DAW).

El proyecto simula el funcionamiento real de una tienda online, diferenciando usuarios de tipo cliente y administrador mediante el uso de sesiones y roles.

Funcionalidades principales
Usuarios

Inicio de sesión y cierre de sesión.

Control de acceso mediante roles (cliente y administrador).

Cliente

Visualización del catálogo de productos.

Añadir productos al carrito de la compra.

Eliminar productos del carrito.

Vaciar el carrito.

Finalizar compra.

Visualizar pedidos realizados.

Administrador

Gestión de productos (listado y eliminación).

Gestión de usuarios (listado y eliminación de clientes).

El usuario administrador no puede ser eliminado.

Arquitectura del proyecto

La aplicación sigue una arquitectura en tres capas:

Capa de presentación: archivos PHP que muestran la interfaz al usuario.

Capa de lógica de negocio: gestión de sesiones, carrito y pedidos.

Capa de acceso a datos: conexión y consultas a la base de datos MySQL.

Estructura del proyecto

stepupstore/
├── index.php
├── login.php
├── logout.php
├── procesar_login.php
├── carrito.php
├── add_carrito.php
├── eliminar_producto.php
├── vaciar_carrito.php
├── guardar_pedido.php
├── admin_productos.php
├── admin_usuarios.php
├── eliminar_producto_admin.php
├── eliminar_usuario.php
├── conexion.php
├── images/
└── README.md

Base de datos

La base de datos está desarrollada en MySQL y contiene las siguientes tablas principales:

usuarios

productos

pedidos

detalle_pedido

Ejecución del proyecto

El proyecto requiere un servidor local con PHP y MySQL (XAMPP, WAMP, MAMP o Docker).

Pasos para su ejecución:

Copiar el proyecto en la carpeta htdocs del servidor local.

Importar la base de datos mediante phpMyAdmin.

Configurar los datos de conexión en el archivo conexion.php.

Acceder desde el navegador a http://localhost/stepupstore
.

Vídeos de pruebas

El funcionamiento de la aplicación se muestra mediante vídeos de pruebas donde se demuestra el uso de la aplicación tanto con el rol de cliente como con el rol de administrador. Los enlaces a los vídeos se incluyen en la memoria del proyecto.

Autor

Áyax López Camps
Estudiante de Desarrollo de Aplicaciones Web (DAW)

Tecnologías utilizadas

PHP

MySQL

HTML5

CSS
