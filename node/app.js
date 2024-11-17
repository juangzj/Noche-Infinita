// Corrige el import de express
import express from 'express';
import cors from 'cors';
// Importamos las rutas para Evento
import eventRoutes from './routes/routes.js';
//Impoirtamos las rutas para dj
import djRoutes from './routes/djRoutes.js'
//importamos la conexion a la base de datos
import db from './database/bds.js';

const app = express();


// Configuración de cors para evitar errores
app.use(cors());
// Usamos json
app.use(express.json());

// Configuramos para las rutas para eventos
app.use('/events', eventRoutes);

//configuramos las rutas para Djs
app.use('/dj', djRoutes)

// Para la conexión a la base de datos en mysql
try {
  await db.authenticate();
  console.log('Conexión exitosa a la base de datos');
} catch (error) {
  console.log(`El error de conexión es: ${error}`);
}

/**app.get('/', (req, res) => {
  res.send('Hola Mundo');
});**/

// Puerto donde escuchará el servidor
app.listen(8000, () => {
  console.log('El servidor está corriendo en http://localhost:8000/');
});
