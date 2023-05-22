# Next.js OpenJira App

Para correr localmente, se necesita la base de datos:

```
docker-compose up -d
```

- El -d, significa **detached**

## Configurar las variables de entorno

Renombrar el archivo .env.template a .env

- MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

## Instalación y ejecución

```
yarn install
yarn dev
```

## Llenar la BD con informacion de prueba (seed)

Hacer una petición a:

```
http://localhost:3030/api/seed

```

## Ejecución en modo producción

```
yarn build
yarn start
```
