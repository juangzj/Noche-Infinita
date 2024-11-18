import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/noche_infinita'

mongoose.connect(url)

const dbm = mongoose.connection
dbm.on('open', () => { "conectado a la base de datos de mongodb" })
dbm.on('error', () => { "error al concetar a mongodb" })

export default dbm