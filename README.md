# 📦 Sistema de Trazabilidad (Backend)

**API REST para el seguimiento, control y generación de QR de productos.**

Este repositorio contiene el servidor (Backend) de una plataforma de trazabilidad. Su función es gestionar el ciclo de vida de los productos, registrando sus cambios de estado, ubicación y generando identificadores únicos (Códigos QR) que permiten el seguimiento físico. Está construido sobre **Node.js** y utiliza **Sequelize** para interactuar con una base de datos SQL.

## 📋 Características Principales

### 🏭 Gestión de Inventario y Rastreo
* **CRUD de Productos:** Controladores para crear, leer, actualizar y eliminar registros de productos en la base de datos.
* **Control de Estados y Ubicaciones:** Modelos dedicados para administrar los diferentes estados por los que pasa un producto (`EstadoModel`) y sus ubicaciones físicas (`UbicacionesModel`), permitiendo un historial de movimientos.
* **Trazabilidad (Taza):** Módulo específico para gestionar la lógica de "Taza de Trazabilidad" (posiblemente métricas o lotes de seguimiento).

### 📱 Generación de Códigos QR
* **Motor de QR:** Integra la librería `qrcode` para generar imágenes `.png` dinámicamente basadas en los datos del producto o su ID.
* **Almacenamiento Local:** Los códigos QR generados se guardan físicamente en el servidor (carpeta `controllers/qrcodes`) y se sirven como archivos estáticos para que el frontend pueda mostrarlos o imprimirlos.

### ⚙️ Arquitectura Técnica
* **ORM Sequelize:** Abstracción de la base de datos MySQL, definiendo esquemas claros (Modelos) para cada entidad, lo que facilita las migraciones y consultas.
* **Servidor Express:** Configuración robusta con `cors` para permitir peticiones desde el frontend y rutas modulares para cada entidad.

## 📂 Estructura del Proyecto

* `server/index.js`: Punto de entrada. Inicia el servidor, configura CORS y expone la carpeta pública de QRs.
* `server/config/database.js`: Configuración de la conexión a MySQL usando Sequelize.
* `server/models/`: Definición de esquemas de la base de datos (`Products`, `Qr`, `Estado`, `Ubicaciones`, `Taza`).
* `server/controllers/`: Lógica de negocio.
    * `QrController.js`: Lógica específica para crear y guardar imágenes QR.
* `server/routes/`: Definición de endpoints de la API (rutas).

## 🚀 Instalación y Ejecución

1.  **Requisitos:** Tener instalado Node.js y un servidor MySQL (ej. XAMPP o Docker).
2.  **Instalar dependencias:**
    Entra a la carpeta `server` y ejecuta:
    ```bash
    npm install
    ```
3.  **Configurar Base de Datos:**
    Asegúrate de que tu servidor MySQL esté corriendo. El proyecto espera una base de datos llamada `trazabilidad`.
4.  **Iniciar Servidor:**
    ```bash
    npm start
    ```
    El servidor correrá por defecto en el puerto 5000 (o el definido en el código).

## ⚙️ Configuración (Hardcoded)

La conexión a la base de datos está definida en `server/config/database.js`. Actualmente, apunta a un entorno local estándar.

**Credenciales actuales:**
* **Base de datos:** `trazabilidad`
* **Usuario:** `root`
* **Contraseña:** (Vacía)
* **Host:** `localhost`

Para cambiar esto (por ejemplo, para producción), edita el archivo:

```javascript
// server/config/database.js
const db = new Sequelize('trazabilidad', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
