//Importar de express las varibles rquest y response
const { request,response }=require('express');

//Importar el modelo de datos del API
const ReservaModelo=require('../models/ReservaModelo.js');


//SE CREAN FUNCIONES PARA CADA UNO DE LOS SERVICIOS QUE PRESTARÁ EL API
//(EL MENÚ DEL RESTAURANTE)

async function buscarReserva(peticion=request,respuesta=response){

    let datosconsultados=await ReservaModelo.find();

    respuesta.json({
        estado:true,
        mensaje:datosconsultados
    });
  
}

async function agregarReserva(peticion=request,respuesta=response){

    let datosReserva=peticion.body;

    let Reserva=new ReservaModelo(datosReserva);
    await Reserva.save();
    
    respuesta.json({
        estado:true,
        mensaje:'La reserva fue gestinada con éxito',
        datos:Reserva
    });

}

async function editarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    let datosReserva=peticion.body;
    

    await ReservaModelo.findByIdAndUpdate(id,datosReserva);


    respuesta.json({
        estado:true,
        mensaje:'Reserva actualizada con éxito'
    });        

}

async function eliminarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    await ReservaModelo.findByIdAndDelete(id);

    respuesta.json({
        estado:true,
        mensaje:'Reserva eliminada con éxito'
    });

}


//EXPORTO(ENVIO) TODAS LAS FUNCIONES HACIA EL ARCHIVO DE RUTAS
module.exports={
    buscarReserva,
    agregarReserva,
    editarReserva,
    eliminarReserva
}