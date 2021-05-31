//TRAIGO EL METODO ROUTER DE EXPRESS PARA PERSONALIZAR MIS RUTAS
const { Router }= require('express');

//IMPORTAR(TRAER) LOS CONTROLADORES
const { buscarReserva }= require('../controllers/controladorReservas.js');
const { agregarReserva }= require('../controllers/controladorReservas.js');
const { editarReserva }= require('../controllers/controladorReservas.js');
const { eliminarReserva }= require('../controllers/controladorReservas.js');

//IMPORTAR LAS VALIDACIONES
const {validarPeticion}=require('../validations/validaciones.js');

//IMPORTAR EL METODO CHECK DEL EXPRESS VALIDATOR
const {check}=require('express-validator');


//CREAR LA LISTA DE VALIDACIONES (arreglo)


let validaciones=Array(

    
        check('NombreCliente',"este campo es obligatorio").not().isEmpty(),
        check('ApellidoCliente',"este campo es obligatorio").not().isEmpty(),
        check('TelefonoCliente',"este campo es obligatorio").not().isEmpty(),
        check('FechainicioReserva',"este campo es obligatorio").not().isEmpty(),
        check('FechaFinalReserva',"este campo es obligatorio").not().isEmpty(),
        check('Numerodepersonas',"este campo es obligatorio").not().isEmpty(),
        check('Tipopaquete',"este campo es obligatorio").not().isEmpty(),
    validarPeticion

);



//PERSONALIZO MIS RUTAS:
const rutas=Router();


//LISTADO DE RURAS
rutas.get('/reservas',buscarReserva);
rutas.post('/reserva/nueva',validaciones,agregarReserva); 
rutas.put('/reserva/editar/:id',editarReserva);
rutas.delete('/reserva/eliminar/:id',eliminarReserva); 


//EXPORTO LAS RUTAS
module.exports=rutas;
