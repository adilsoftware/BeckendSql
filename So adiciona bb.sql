CREATE TABLE usuarios(
    nome VARCHAR (50),
    email VARCHAR (100),
    idade  int
);

INSERT INTO usuarios(nome, email, idade) VALUE (
"Lucelia silva",
"lucelia@teste",
42
);

select * from usuarios where idade = 41;

delete from usuarios where nome = "Lucelia silva";

update usuarios set nome = "teste" where nome = "Lucelia silva";