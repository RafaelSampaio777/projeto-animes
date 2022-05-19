CREATE DATABASE animesMania;
USE animesMania;

CREATE TABLE usuario (
ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(16)
);

CREATE TABLE animes (
ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
qtd_episodios INT 
);

CREATE TABLE anime_favorito (
FK_usuario INT,
FOREIGN KEY (FK_usuario) REFERENCES usuario(ID),
FK_anime INT,
FOREIGN KEY (FK_anime) REFERENCES animes(ID),
PRIMARY KEY (FK_usuario, FK_anime)
);