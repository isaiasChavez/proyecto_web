import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import institutosRoutes from './routes/institutosRoutes'
import morgan from 'morgan';
import swagger_ui_express from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import cors from 'cors';
import carrerasRoutes from './routes/carrerasRoutes';
class Server
{
public app: Application;
constructor()
{
this.app= express();
this.config();
this.routes();
this.app.use('/documentacion',swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
}
config (): void
{
	this.app.set('port',process.env.PORT|| 3000);
	this.app.use(morgan('dev'));
	this.app.use(cors());
	this.app.use(express.json());
	this.app.use(express.urlencoded({extended: false}));
}
routes (): void
{
	this.app.use(indexRoutes);
	this.app.use('/api/institutos',institutosRoutes);
	this.app.use('/api/carreras',carrerasRoutes);

}
start (): void
{
this.app.listen(this.app.get('port'), () =>
{
console.log('Servidor ejecutándose en el puerto ',this.app.get('port'));
});
}
}
const server = new Server();
server.start();


