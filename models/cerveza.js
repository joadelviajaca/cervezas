const { Schema, model } = require('mongoose');

const CervezaSchema = Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    Descripción: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        
    },
    Graduación: {
        type: String,
        required: [true, 'La graduación es obligatoria'],
    },
    Envase: {
        type: String,
    },
    Precio: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    user: {
        type: String,
        required: true
    }
});



module.exports = model( 'Cerveza', CervezaSchema );