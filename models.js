const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');

console.log(sequelize);

const Heroes = sequelize.define('heroes', {
    name: DataTypes.STRING,
    actor: DataTypes.STRING,
    gender: DataTypes.STRING,
    school_id: DataTypes.INTEGER,
    wand: DataTypes.STRING,
    alive: DataTypes.BOOLEAN,
    img: DataTypes.STRING
})

const Schools = sequelize.define('schools', {
    name: DataTypes.STRING,
})

Heroes.belongsTo(Schools, {
    foreignKey: 'school_id',
    targetKey: 'id'
})

module.exports = {Heroes, Schools};