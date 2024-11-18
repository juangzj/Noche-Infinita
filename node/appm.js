import express from 'express';
import cors from 'cors'
//Importamos la conexion a la base de datos
import dbm from './database/dbm.js';
//Importamos el enrutador
import experienciasClientesRoutes from './routes/experienciasClientesRoutes.js'



/**
 * Scrip pata la conexion con la base de datos de mongo db 
 */

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//rutas
app.use('/experienciaCliente', experienciasClientesRoutes)

try {
  await dbm.authenticate();
  console.log('Conexión exitosa a la base de datos');
} catch (error) {
  console.log(`El error de conexión es: ${error}`);
}

app.listen(8001, () => {
  console.log('Servidor corriendo en el puerto http://localhost:80001/');
})