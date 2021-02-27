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
    database: ''
    // completar
});

conexion.connect();

// Para trabajar con async-await
const qy = ;


// Servidor 
app.listen (puerto, () => {
    console.log('Servidor funcionando por puerto 3000!');
});