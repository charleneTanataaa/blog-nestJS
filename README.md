# Simple REST API - NestJS TypeScript
## Description
This project is a Simple REST API blog that is built using NestJS and TypeScript. This app has 2 entities: User and Post. This app utilizes JWT Authentication, SQLite Daabase, and End-to-End Testing using Jest.

Features:
- JWT-based authentication (Register & Login)
- CRUD User (One-to-many relation with User)
- CRUD Post (Many-to-one relation with User)
- Protected API using JWT guard
- SQL Database (SQLite)
- End-to-End (E2E) Testing
- API Documentation in Postman

## Project Architecture
This project uses modular + layered architecture pattern that's common in NestJS. This pattern is chosen because it's modular which means it's easy to maintain (a change in a module does not impact other module) and scalable as the application grow. This pattern also make unit testing and e2e testing easier since each layer has clear responsibility and can be tested independently. This pattern is also used in official documentation of NestJS, making it best practice for building structured and maintainable backend.

The main structure consists of:
- Controller to handle HTTP requests & responses.
- Service to handle business logic.
- Entity to represent database table.
- Module to combine fiture for each domain.

## Database
Database: SQLite
ORM: TypeORM

## End-to-End (E2E) Testing
E2E testing is used to make sure authentication flow works well.
Test includes:
- User register
- User login (JWT Token)
- User access to protected endpoints using token
- Validate API response

## API Documentation
API Documentation at Postman:
- Authentication
- User CRUD
- Post CRUD

Link to Postman: https://charlenetanataaa-801756.postman.co/workspace/Charlene-Tanata's-Workspace~fcd569b1-d0f8-4858-846b-af520752cef0/collection/51999065-3ca40c7d-a15d-4bed-b1e8-0f7b76a3ea10?action=share&creator=51999065

## Compile and run the project

```bash
$ npm install
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

$ npm run test:e2e

## Author
Name: Charlene Tanata
Tech Stack: NestJS, TypeScript, SQL, JWT

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
