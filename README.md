# Prueba técnica React de LaLiga

- Versión de Node >= 14.18.0
- Versión de Yarn >= 1.22.18
- Compatibilidad: ES6 Navegadores evergreen (Chrome, Firefox, Edge, Safari)

## Instrucciones

- [Instrucciones](client/src/docs/laliga-prueba-tecnica-instrucciones.md)

## Entorno de desarrollo local

### Estructura del proyecto

```text
|--carpeta-raiz
    |
    |--client
    |
    |--server
```

- En **client** es donde realizarás la prueba técnica solicitada.
- En **server** está incluida la API que debes consumir para tu desarrollo.
- <u>En server **no debes hacer ninguna modificación**</u>.
  <br />
  <br />

## Instalación y ejecución de `server`

```bash
cd server
yarn && yarn start

```

> Por defecto el servidor local de back se despliega en http://localhost:4000

> Puedes consultar la API en http://localhost:4000/api-docs/

<br />
<br />

## Instalación y ejecución de `client`

```bash
cd client
yarn && yarn start
```

> Por defecto el servidor local de front se despliega en http://localhost:3000

  <br />
  <br />

## Memoria

**_ Puedes documentar aquí la memoria de tu prueba _**

Para documentar la memoria de la prueba he decidido utilizar un tablero de trello, donde he ido separando cada una de las tareas y posteriormente documentado el proceso de cada una de ellas, recomiendo echarle un vistazo ya que ahí explico el porque de muchas de mis decisiones: https://trello.com/b/hVER0MrX/la-liga-app

> Endpoint live demo: http://51.178.18.68:3000/

Algunas cosas interesantes a destacar:

**Memoize:**

Se ha decidido utilizar este middleware para cachear la información de las peticiones repetidas y así minimizarlas al máximo.

**AuthInterceptor:**

Que utiliza la libreria de fetch-intercept, para que la gestión del token y los headers se haga desde un único sitio de la aplicación.

**SuperFetch:**

He unificado que todas las peticiones de la app passen per esta única función fetch, para así utilizar la url y el interceptor desde un único sitio, y esta al mismo tiempo se encarga de gestionar la respuesta.

**Docker:**

He creado los Dockerfile de la app y de la api para así poder hacer deploy en un servidor y tener una live demo.

**Single responsibility:**

Como se podrá ver la mayoría de la app cumple con este principio, pero en el componente de paginación he creido que aplicarlo para un único useEffect sería contraproducente.

**Testing:**

El objetivo es superar el 75% de coverage, si el tiempo lo permite, de momento ronda el 60%.

**Custom hooks:**

-Login, existen dos custom hooks, uno de ellos se encarga de las validaciones del formulario, y el otro del submit de los inputs del formualrio y de procesar la respuesta, en este es donde se hace la llamada a redux-saga.

-Clubs, existen tres custom hooks, uno para procesar el filtrado y paginado del listado de clubs, otro del fetch del listado y el último del update de los clubs.

-useCounter, este un hook que puse a nivel de applicación ya que se puede reutilizar perfectamente en cualquier otro componente.

**Estructura del cliente**

```text
src/
|-- app/ ----------------------->Contiene funcionalidades que se utilizan en toda la app
| |-- components/ -------------->Contiene componentes que se pueden reutilziar en varias vistas
| | |-- navBar/
| | |-- pagination/
| |-- hooks/ ------------------->Contiene hooks que pueden ser reutilizados
| | |-- useCounter/
| |-- middleware/ -------------->Contiene middlewares
| | |-- authInterceptor.ts------>Se usa en la función superFetch, para interceptar la llamada e introducir el token en los headers
| | |-- memoize.ts ------------->Se encarga de cachear la respuesta de las funciones donde se usa
| | |-- rootSaga.ts
| |-- routing/ ----------------->Contiene todo el sistema de routing
| | |-- customRouter/
| | |-- protectedRouter/
| | |-- appRouter.tsx
| |-- types/ ------------------->Contiene tipados que se reutilizan en varios sitios de la app
| | |-- apiParamsTypes.ts
| |-- utils/ ------------------->Contiene funciones que se reutilizan en toda la applicación
| | |-- formDate/--------------->Encargado del formateo de las fechas
| | |-- responseHandler/-------->Encargado de las respuestas de la api
| | |-- superFetch/------------->Fetch global para toda la aplicación
| | |-- authInterceptorService.ts
| | |-- localStorage.ts--------->Encargado del control del token y sus acciones
| | |-- testUtils.ts
| |-- hooks.ts
| |-- store.ts
|-- assets/
| |-- img/
|-- |-- loginHeader.jpg
|-- |-- logo.png
|-- config/
| |-- env.ts
|-- docs/
| |-- laliga-prueba-tecnica-instrucciones.md
|-- features/ -------------->Contiene las vistas de la aplicación
| |-- clubs/
| | |-- ...
| |-- login/
| | |-- hooks/ -------------->Hooks únicos para la feature
| | | |-- useControlSubmit/
| | | | |-- useControlSubmit.ts
| | | | |-- useControlSubmitTypes.ts
| | | |-- useFields/
| | | | |-- tests/
| | | | | |-- useFields.test.ts
| | | | |-- useFields.ts
| | | | |-- useFieldsTypes.ts
| | |-- tests/ -------------->Tests para la feature
| | | |-- login.test.tsx
| | | |-- loginSlice.test.tsx
| | |-- login.tsx
| | |-- loginConsts.ts
| | |-- loginSaga.ts
| | |-- loginService.ts
| | |-- loginSlice.ts
| | |-- loginTypes.ts
| |-- notFoundPage/
| | |-- tests/
| | | |-- notFoundPage.test.tsx
| | |-- notFoundPage.tsx
|-- helpers/
| |-- history.ts
|-- App.tsx
|-- index.tsx
```
