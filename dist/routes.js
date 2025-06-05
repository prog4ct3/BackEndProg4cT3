"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const tipoHabitacion_routes_1 = require("./modules/tipoHabitacion/routes/tipoHabitacion.routes");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.tipoHabitacionRoutes = new tipoHabitacion_routes_1.TipoHabitacionRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
        this.tipoHabitacionRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map