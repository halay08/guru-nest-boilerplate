import './src/boilerplate.polyfill';

import dotenv from 'dotenv';

const {
    DB_TYPE,
    DB_HOST = 'localhost',
    DB_USERNAME,
    DB_PASSWORD,
    DB_PORT,
    DB_DATABASE,
    NODE_ENV = 'development',
} = process.env;

import { SnakeNamingStrategy } from './src/snake-naming.strategy';

dotenv.config({
    path: `.${NODE_ENV}.env`,
});

// Replace \\n with \n to support multiline strings in AWS
for (const envName of Object.keys(process.env)) {
    process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
}

module.exports = {
    type: DB_TYPE,
    host: DB_HOST,
    port: +DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    namingStrategy: new SnakeNamingStrategy(),
    entities: ['src/modules/**/*.entity{.ts,.js}'],
    migrations: ['src/database/migrations/*{.ts,.js}'],
    seeds: ['src/database/seeds/**/*{.ts,.js}'],
    factories: ['src/database/factories/**/*{.ts,.js}'],
};
