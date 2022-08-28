module.exports = (sequelize, DataTypes) => {
    const roles = sequelize.define('roles', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false,

        }
    })
    // roles.associate = (models)=>{

    // }
    // roles.sync({ force: true })
    roles.associate = (models) => {
        roles.hasOne(models.user_roles, {
            foreignKey: 'role_id',
            // targetKey:'id',
            // // sourceKey:'user_id',

        })
    }
    return roles

}
