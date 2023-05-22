# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

- MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

## Instalación

```
yarn
```

## Ejecución

Luego correr el proyecto

```
yarn dev
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
