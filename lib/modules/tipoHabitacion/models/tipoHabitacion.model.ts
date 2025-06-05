
import { ROLES } from '../../../config';
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

let validRoles = {    
    values: ROLES,
    message: '{VALUE} is not a valid role'
};

export interface ITipoHabitacion extends mongoose.Document {  
    tipoHabitacion: string;
    tarifa: Number; 
 }

 const TipoHabitacionSchema = new Schema(
    {
        tipoHabitacion: {
            type: String,
            required: [true, 'tipoHabitacion required'],
            unique: true
        },
        tarifa: {
            type: Number,
            required: [true, 'tarifa required'],
        }
    }
    
 );

const TipoHabitacion = mongoose.model<ITipoHabitacion>("TipoHabitacion", TipoHabitacionSchema);
export default TipoHabitacion;