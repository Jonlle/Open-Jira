# Next.js OpenJira App

## Instalación

```
yarn
```

## Ejecución

Luego correr el proyecto

```
yarn dev
```

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

- MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

## Llenar la BD con informacion de prueba (seed)

```
http://localhost:3030/api/seed

```

## Ejecución en modo producción

```
yarn build
yarn start
```

## Créditos

- [Next.js](https://github.com/zeit/next.js)
- [Material UI](https://github.com/mui-org/material-ui)
