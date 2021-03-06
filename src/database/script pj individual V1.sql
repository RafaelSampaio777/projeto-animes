CREATE DATABASE animesMania;

USE animesMania;

CREATE TABLE animes (
ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
qtd_episodios INT 
);

CREATE TABLE usuario (
ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(16),
FK_anime INT NULL,
FOREIGN KEY (FK_anime) REFERENCES animes(ID)
);

CREATE TABLE resposta_quiz (
ID INT NOT NULL AUTO_INCREMENT,
qtd_acertos INT,
FK_usuario INT,
FOREIGN KEY (FK_usuario) REFERENCES usuario(ID),
PRIMARY KEY (ID, FK_usuario)
);

INSERT INTO animes VALUES
(NULL, 'One Piece', 1020),
(NULL, 'Naruto', 632),
(NULL, 'Bleach', 327);