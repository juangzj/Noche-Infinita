import sequelize, { Sequelize } from 'sequelize';

const db = new Sequelize('noche_infinita', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'

})

export default db