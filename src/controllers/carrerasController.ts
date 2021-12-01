import {Request,Response} from 'express';

import pool from '../database';
class CarrerasController
{
    public async list(req: Request, res: Response ): Promise<void>
    {
        const respuesta = await pool.query('SELECT * FROM carreras order by codigoCarrera');
        console.log(respuesta);
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        let consulta='SELECT * FROM carreras WHERE idCarrera = '+id;
        const respuesta = await pool.query(consulta);
        console.log(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'Carrera no encontrado'});
        }
    }
export const carrerasController = new CarrerasController();