
module.exports = (sequelize, DataTypes) => {
    const user_roles = sequelize.define('user_roles', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    }, {
        timestamps: false,
        tablename: 'user roles'
    }

    )
    user_roles.associate = (models) => {

        user_roles.belongsTo(models.users, {
            foreignKey: 'user_id',
            targetKey: 'id',
            sourceKey: 'user_id',

        })

        user_roles.belongsTo(models.roles, {
            foreignKey: 'role_id',
            targetKey: 'id',
            sourceKey: 'role_id',

        })

    }
    return user_roles
}