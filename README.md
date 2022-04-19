# Full Stack Products C.R.U.D !

The idea of the project is to create a product and category registration API, using NodeJS and React, where the 1:N relationship of products and categories is done.

The user can create, delete, edit a product or a category using the graphical application created with React, and list the products and their categories on the main screen

# Technologies Used

For this project the following technologies were used:

- [React](https://pt-br.reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

## How to Use:

1. Clone the repository
  ~~~bash
  git clone git@github.com:JeffThierch/Products-CRUD.git
  ~~~

2. In the root of the project change the .env_example file to .env

3. (Optional) - Change the environment variables.

4. Enter the client folder
  ~~~bash
  cd client
  ~~~

5. Change .env_example to .env

6. Change the environment variable to the **same port the Node server is running on**.

7. In the server folder, change the .env_example file to .env

8. (**Important**) - If running using Docker use:

  ˋˋˋ
    DATABASE_URL="postgresql://POSTGRES_USER:POSTGRES_PASSWORD@postgres:5432/POSTGRES_DATABASE?schema=public"
  ˋˋˋ

9. Change the fields in the .env file to the **same fields used in the database configuration** performed in the **second step**

10. In the project root run the command:
  ~~~bash
  docker-compose up --build
  ~~~
11. If everything is configured correctly, after the build process you can simply access the application.
