"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../../config");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let validRoles = {
    values: config_1.ROLES,
    message: '{VALUE} is not a valid role'
};
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