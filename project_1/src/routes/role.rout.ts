import * as express from 'express';
import Routers from '../interfaces/routers.interface';
import RoleController from '../controllers/role.controller';
 
class RoleRout implements Routers {
  public path = '/role';
  public router = express.Router();
  private controll: RoleController = new RoleController();
 
  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.post(this.path, this.controll.create);
    this.router.get(this.path, this.controll.getAll);
    this.router.delete(`${this.path}/:id`, this.controll.delete);
  }
}

export default RoleRout;