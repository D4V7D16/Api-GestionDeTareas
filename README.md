**Api-gestion de tareas.**

**Descripción**
Gestiona tareas por medio de las operaciones crud (crear, leer, actualizar y eliminar) conectada a una base de datos de mongo.

**Tecnologías Utilizadas**

TypeScript: Para una mejor tipado y estructura del código.
Node.js: Entorno de ejecución de JavaScript del lado del servidor.
Express: Framework web para Node.js.
MongoDB: Base de datos NoSQL para almacenar los datos.
dotenv: Para gestionar variables de entorno de forma segura.
morgan: Middleware para registrar las solicitudes HTTP.
cors: Middleware para habilitar solicitudes desde diferentes orígenes.


**Instalación**

Clona el repositorio:
Bash
git clone https://github.com/D4V7D16/Api-GestionDeTareas

**Instala las dependencias**

Bash
cd tu-repositorio
npm install express morgan cors mongoose node typescript body-parser dotenv
Usa el código con precaución.

**Ejecución**

Terminal de preferencia
npm run dev
Visualizar video de prueba con postman

https://drive.google.com/file/d/1N2vnAMMpSiquO5XTLI5obPElT3k5Otrr/view?usp=sharing

Estructura de la Aplicación:

src: Contiene el código fuente de la aplicación.
routes: Contiene las rutas de la API.
controllers: Contiene las funciones del crud.
database: Contiene la conexion a la base de datos.
models: Contiene los modelos de los datos.
services: Contiene las funciones para gestion con base de datos.
config: Contiene la configuración de la aplicación.

Endpoints disponibles:

GET /server: Obtiene respuesta del servidor en el puerto 3000.
POST /task: Crea una nueva tarea.
GET /task/Obtiene tareas disponibles.
PUT /task/:id: Actualiza una tarea por su id.
DELETE /task/:id: Elimina una tarea por su id.

Autores:
David Salamanca
