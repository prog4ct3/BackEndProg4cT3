import { Request, Response } from 'express';
import * as _ from 'lodash';
import TipoHabitacion from '../models/tipoHabitacion.model';

export class TipoHabitacionController {

    crearTipoHabitacion = (req: Request, res: Response) => {
        const nuevaTipoHabitacion = new TipoHabitacion(
            {
                tipoHabitacion: req.body.tipoHabitacion,
                tarifa: req.body.tarifa
            }
        );

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
    }

    obtenerTipoHabitacions = (req: Request, res: Response) => {
        TipoHabitacion.find()
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
    }

    actualizarTipoHabitacion = (req: Request, res: Response) => {
        TipoHabitacion.findByIdAndUpdate(req.params.id, {
            tipoHabitacion: req.body.tipoHabitacion,
            tarifa: req.body.tarifa
        })
        .then(tipoHabitacionActualizada => {
            res.status(200).json({
                ok: true,
                tipoHabitacion: tipoHabitacionActualizada,
                message: 'TipoHabitacion actualizada'                
            })
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error,
                message: 'TipoHabitacion no actualizada'
            });
        });

    }

    eliminarTipoHabitacion = (req: Request, res: Response) => {
        TipoHabitacion.findByIdAndDelete(req.params.id)
        .then(tipoHabitacionEliminada => {
            res.status(200).json({
                ok: true,
                message: 'TipoHabitacion eliminada'
            })
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error,
                message: 'TipoHabitacion no eliminada'
            })
        });
    }
}