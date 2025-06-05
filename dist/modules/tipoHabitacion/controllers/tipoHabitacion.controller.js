"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoHabitacionController = void 0;
const tipoHabitacion_model_1 = require("../models/tipoHabitacion.model");
class TipoHabitacionController {
    constructor() {
        this.crearTipoHabitacion = (req, res) => {
            const nuevaTipoHabitacion = new tipoHabitacion_model_1.default({
                tipoHabitacion: req.body.tipoHabitacion,
                tarifa: req.body.tarifa
            });
            nuevaTipoHabitacion.save()
                .then(tipoHabitacionCreada => {
                res.status(201).json({
                    ok: true,
                    tipoHabitacion: tipoHabitacionCreada,
                    message: 'TipoHabitacion creada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error
                });
            });
        };
        this.obtenerTipoHabitacions = (req, res) => {
            tipoHabitacion_model_1.default.find()
                .then(tipoHabitaciones => {
                res.statu(200).json({
                    ok: true,
                    tipoHabitaciones: tipoHabitaciones
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error
                });
            });
        };
        this.actualizarTipoHabitacion = (req, res) => {
            tipoHabitacion_model_1.default.findByIdAndUpdate(req.params.id, {
                tipoHabitacion: req.body.tipoHabitacion,
                tarifa: req.body.tarifa
            })
                .then(tipoHabitacionActualizada => {
                res.status(200).json({
                    ok: true,
                    tipoHabitacion: tipoHabitacionActualizada,
                    message: 'TipoHabitacion actualizada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error,
                    message: 'TipoHabitacion no actualizada'
                });
            });
        };
        this.eliminarTipoHabitacion = (req, res) => {
            tipoHabitacion_model_1.default.findByIdAndDelete(req.params.id)
                .then(tipoHabitacionEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'TipoHabitacion eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error,
                    message: 'TipoHabitacion no eliminada'
                });
            });
        };
    }
}
exports.TipoHabitacionController = TipoHabitacionController;
//# sourceMappingURL=tipoHabitacion.controller.js.map