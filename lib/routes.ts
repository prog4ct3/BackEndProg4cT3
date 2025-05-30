import { TipoHabitacionRoutes } from "./modules/tipoHabitacion/routes/tipoHabitacion.routes";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private tipoHabitacionRoutes: TipoHabitacionRoutes: TipoHabitacionRoutes();

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.tipoHabitacionRoutes.routes(app);
    }
}