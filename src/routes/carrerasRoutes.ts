import { Router } from 'express';
import { carrerasController } from '../controllers/carrerasController';
class CarrerasRoutes
{
public router: Router=Router();
constructor()
{
this.config();
}
config() : void
{
this.router.get('/', carrerasController.list );
this.router.get('/:id', carrerasController.listOne );
this.router.post('/create', carrerasController.create );
this.router.put('/actualizar/:idCarrera', carrerasController.actualizar);
this.router.delete('/eliminar/:idCarrera', carrerasController.eliminar );
}
}
const carrerasRoutes= new CarrerasRoutes();
export default carrerasRoutes.router;