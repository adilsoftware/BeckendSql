const Sequelize =  require('sequelize')   ///conexao com o banco de dados mysql
//conexão com o banco de dados
const sequelize = new Sequelize('postapp', 'root', '', {
    host:"localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
