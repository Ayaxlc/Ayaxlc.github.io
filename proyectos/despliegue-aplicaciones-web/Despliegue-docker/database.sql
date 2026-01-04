CREATE DATABASE IF NOT EXISTS ejemplo_docker;

USE ejemplo_docker;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);
