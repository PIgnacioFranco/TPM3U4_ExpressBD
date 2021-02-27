// carga de modulos
const express = require ('express');
const mysql = require ('mysql');
const util = require ('util');

const app = express ();






// Servidor 
app.listen (3000, () => {
    console.log('Servidor funcionando por puerto 3000!');
});