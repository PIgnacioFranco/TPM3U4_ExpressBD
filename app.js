// carga de modulos
const express = require ('express');
const mysql = require ('mysql');
const util = require ('util');

const app = express ();
const puerto = 3000;

app.use (express.json()); // mapeo de json a obj js

const conexion = mysql.createConnection ({
    host: localhost,
    user: 'root',
    password: '',
    database: 'depositomateriales'
    // completar
});

conexion.connect( () => {
    if (error) {
        throw error;
    }
    console.log ('Conexión a la BD establecida!');
});

// Para pasar de callback a async-await
const qy = util.promisify(conexion.query).bind(conexion);

/**
 * Base de datos. Deposito de materiales:
 * Tabla: material y deposito
 * material: elementos a depositar
 * deposito: cantidad a depositar
 */

 /**
  * Descpción tabla material:
  * id: id del material
  * Nombre: nombre del material (obligatorio)
  * Descripcion: descripcion del insumo
  */





// Servidor 
app.listen (puerto, () => {
    console.log('Servidor funcionando por puerto 3000!');
});