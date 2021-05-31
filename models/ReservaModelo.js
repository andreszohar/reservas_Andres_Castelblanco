//Traigo de mongoose el modelo y el schema de datos
const {model, Schema}=require('mongoose');

//creo el esqueleto de datos que va a tener cada documento (bolsa) de mi colección
const ReservaEsqueleto=Schema({

  
  NombreCliente:{
        type:String,
        required:true
    },
    ApellidoCliente:{
        type:String,
        required:true
    },
    TelefonoCliente:{
        type:Number,
        required:true
    },
    FechainicioReserva:{
        type:Number,
        required:true
    },
    FechaFinalReserva:{
        type:Number,
        required:true
    },
    Numerodepersonas:{
        type:Number,
        required:true
    },
    Tipopaquete:{
        type:String,
        required:true,
        enum:["dorado","plata"]
    }

});

module.exports=model('Reserva',ReservaEsqueleto);