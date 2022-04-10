# Products C.R.U.D !

Um simples, porem, poderoso CRUD de produtos e categorias.
A ideia do projeto é criar um um CRUD básico, utilizando **NodeJS** e **React**, onde e possível **cadastrar produtos e categorias**, alem de, **criar relacionamento** entre eles no modelo **(N:1)** ou muitos pra um!


# Tecnologias Utilizadas

Para esse projeto foram utilizadas as seguintes tecnologias :

	- [React](https://pt-br.reactjs.org/)
	- [NodeJS](https://nodejs.org/en/)
	- [Prisma](https://www.prisma.io/)
	- [PostgreSQL](https://www.postgresql.org/)
  - [Docker](https://www.docker.com/)

## Como Utilizar

  1. Clonado o repositorio
  ~~~bash 
    git clone git@github.com:JeffThierch/Products-CRUD.git
  ~~~

  2. Na raiz do projeto altere o arquivo .env_example para .env

  3. (Opcional) - Altere as variaveis de ambiente.

  4. Entre na pasta client
  ~~~bash
    cd client
  ~~~

  5. Altere o arquivo .env_example para .env

  6. Altere a variavel de ambiente para a **mesma porta que o servidor Node esta rodando**

  7. Na pasta servidor, altere o arquivo .env_example para .env

  8. (**Importante**) - Caso for rodar utilizando o Docker utilize a variavel

  ˋˋˋ
    DATABASE_URL="postgresql://POSTGRES_USER:POSTGRES_PASSWORD@postgres:5432/POSTGRES_DATABASE?schema=public"

  ˋˋˋ

  9. Altere os campos do arquivo .env para os **mesmos campos utilizados na configuracao do banco de dados** realizado no **segundo passo**

  10. Na raiz do projeto rode o comando:
    ~~~bash 
      docker-compose up --build
    ~~~
  11. Se tudo estiver configurado corretamente, apos o processo de build terminar, entre no diretorio server

  ~~~bash
    cd server 
  ~~~

  12. (**CRITICO**) - Com os **containers rodando**, entre no arquivo **.env do servidor** e altere o campo:

  ˋˋˋ
  @postgress:5432 para @localhost:5432
  ˋˋˋ

  13. **Apos alterar para localhost**, rode o comando no **diretorio server**

  ~~~bash
    npx prisma generate dev
  ~~~

  14. Apos gerado as migrations, altere o arquivo .env novamente para:

  ˋˋˋ
  @postgress:5432
  ˋˋˋ

  15. Apos alterado, **derrube os containers do docker** utilizando o **CTRL + C**

  16. Retorne a raiz do projeto e execute o comando:

  ~~~bash
    docker-compose up
  ~~~

  17. E pronto, se tudo foi feito corretamente, basta acessar sua aplicacao React no browser.


