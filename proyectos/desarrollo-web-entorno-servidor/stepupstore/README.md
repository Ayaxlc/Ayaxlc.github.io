# 👟 StepUpStore

Aplicación web de comercio electrónico  
Proyecto del módulo **Desarrollo Web en Entorno Servidor (DAW)**

---

## 📄 Descripción

**StepUpStore** es una aplicación web desarrollada con **PHP y MySQL** que simula el funcionamiento real de una tienda online.

El proyecto está orientado al trabajo en **entorno servidor**, utilizando **sesiones**, **roles de usuario** y **conexión a base de datos**.

La aplicación diferencia entre usuarios **cliente** y **administrador**, mostrando funcionalidades distintas según el rol.

---

## 🧩 Funcionalidades

### 👤 Cliente
- Inicio y cierre de sesión
- Visualización de productos
- Añadir productos al carrito
- Eliminar productos del carrito
- Vaciar carrito
- Finalizar compra
- Consultar pedidos

### 🔐 Administrador
- Gestión de productos
- Eliminación de productos
- Gestión de usuarios
- Eliminación de usuarios de tipo cliente
- El usuario administrador no puede ser eliminado

---

## 🏗️ Arquitectura

La aplicación sigue una **arquitectura en tres capas**:

- **Capa de presentación**: interfaz y vistas en PHP
- **Capa de lógica de negocio**: gestión de sesiones, carrito y pedidos
- **Capa de acceso a datos**: conexión y consultas a MySQL

---

## 🗄️ Base de datos

La base de datos está desarrollada en **MySQL** y contiene las siguientes tablas:

- usuarios
- productos
- pedidos
- detalle_pedido

---

## 🧪 Pruebas

El funcionamiento del proyecto se muestra mediante **vídeos de pruebas**, donde se demuestra:

- Acceso como cliente
- Acceso como administrador
- Gestión de productos, usuarios y carrito

Los enlaces a los vídeos se incluyen en la memoria del proyecto.

---

## 🛠️ Tecnologías utilizadas

- PHP
- MySQL
- HTML5
- CSS
- Sesiones PHP

---

## 👤 Autor

Áyax López Camps  
Estudiante de Desarrollo de Aplicaciones Web (DAW)

