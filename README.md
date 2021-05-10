Guru NestJS Boilerplate

[![Guru NestJS](./nest-logo.png)](https://github.com/nestjs/nest)

> This is the boilerplate of NodeJS Typescript using NestJS Framework, MySQL and TypeOrm. Questions, feedback, and for now, even bikeshedding are welcome. 😄

## Prerequisites

* **Docker**. Follow the Docker document at [Offical Docker site](https://docs.docker.com/ "Docker document") guide.
* **Docker Compose**. Follow the Docker Compose at [Overview of Docker Compose](https://docs.docker.com/compose/ "Overview of Docker Compose") guide.

## Getting started

```bash
# 1. Clone the repository.
$ git clone https://github.com/halay08/guru-nest-boilerplate.git nestjs-boilerplate
```

## Installation

```bash
$ cd nestjs-boilerplate
# Install dependencies from package.json
$ yarn
```

> Note: Don't delete yarn.lock before installation

### Database

This boilerplate uses [TypeORM](https://github.com/typeorm/typeorm) with Data Mapper pattern. MySQL is used as the database type.

### Configuration

Then clone the sample configuration file `.env.example` to `.env` file and modify mysql configrations.

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=guru
DB_PASSWORD=guru
DB_DATABASE=guru
```

### Migration & Seeding

A sample migration to create the `user` table is already generated in `src/database/migrations` directory.

You can create other migration files with running the following command:

```sh
$ yarn migration:create project_table

# Truncate full database (note: it isn't deleting the database)
yarn schema:drop
```

To create some fake records for your table, please follow the sample seeder & factory which are already generated in `src/database/seeds` and `src/database/factories`.

Run migrations after creating or generating:

```
$ yarn migration:run
```

Run seedings:

```
$ yarn seed:run
```

### Dev server

> Note: If you're on Linux and see an `ENOSPC` error when running the commands below, you must [increase the number of available file watchers](https://stackoverflow.com/questions/22475849/node-js-error-enospc#answer-32600959).

```sh
# Launch the dev server
yarn dev

# Launch the dev server with file watcher
yarn watch

# Launch the dev server and enable remote debugger with file watcher
yarn debug
```

## Nest generate

```sh
$ nest generate <schematic> <name> [options]
$ nest g <schematic> <name> [options]
```

``` sh
# Generate a controller
$ nest g controller projects

# Generate CRUD resource with name `project` inside modules directory
$ nest g resource modules/project

> ? What transport layer do you use? GraphQL (code first)
> ? Would you like to generate CRUD entry points? Yes
> CREATE src/users/users.module.ts (224 bytes)
> CREATE src/users/users.resolver.spec.ts (525 bytes)
> CREATE src/users/users.resolver.ts (1109 bytes)
> CREATE src/users/users.service.spec.ts (453 bytes)
> CREATE src/users/users.service.ts (625 bytes)
> CREATE src/users/dto/create-user.input.ts (195 bytes)
> CREATE src/users/dto/update-user.input.ts (281 bytes)
> CREATE src/users/entities/user.entity.ts (187 bytes)
> UPDATE src/app.module.ts (312 bytes)

# See more at https://docs.nestjs.com/recipes/crud-generator
```

See more at [NestJS CLI usage documentation](https://docs.nestjs.com/cli/usages).

## Use docker

First at all,  please create docker network and subnetwork:

```sh
$ docker network inspect guru_network > /dev/null || docker network create --ipam-driver default --subnet=99.0.0.0/16 --attachable guru_network
```

Give write permission for `data` directory

```sh
$ chmod 0777 .data
```

Start all services

```
$ docker-compose up -d
```

## Troubleshooting

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discuss Guru NestJS Boilerplate on GitHub](https://github.com/halay08/guru-nest-boilerplate/discussions)
