"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TipoHabitacionSchema = new Schema({
    tipoHabitacion: {
        type: String,
        required: [true, 'tipoHabitacion required'],
        unique: true
    },
    tarifa: {
        type: Number,
        required: [true, 'tarifa required'],
    }
});
const TipoHabitacion = mongoose.model("TipoHabitacion", TipoHabitacionSchema);
exports.default = TipoHabitacion;
//# sourceMappingURL=tipoHabitacion.model.js.map