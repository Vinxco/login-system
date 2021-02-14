# login-system

Estes es un ejemplo de sistema de login realizado en Vue.js y con soporte de usuarios en firebase.
La autentificación se hace en servidor con firebase auth.
Cómo librería externa he usado moment.js para el manejo de fechas más cómodo.

## Installación

Descargar el repo e instalarlo

```sh
npm install
```
para correr la aplicación

```sh
npm run serve
```

## Instrucciones

Puede usar el usuario de ejemplo 

```sh
ususario: admin@example.com
password: 123456789
```

La aplicación consta de dos vistas, una de login y otra que muestra el tiempo que lleva logueado el usario a la que sólo se puede acceder una vez realizado el log-in con éxito.

Las vistas se ha creado como componentes diferentes, y he intetado usar nomeclatura BEM pero no es muy necesario en este caso debido a que vue permite estilos 'scoped' y tampoco hay muchos bloques en las dos vistas.

He aprovechado las 'guard' de vue router, para proteger la vista logueada.

La aplicación no valida desde el lado del cliente, se limita a mostar los errores que firebase auth devuelve.



## License
[MIT](https://choosealicense.com/licenses/mit/)