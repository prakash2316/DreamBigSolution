module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('users', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lastloginAt: {
            type: DataTypes.DATE,
            allowNull: false,

        },

        isAdmin: {
            type: Boolean,
            default: false,
        },


    }, {
        timestamps: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt",

    })
    User.associate = (models) => {
        User.hasOne(models.user_roles, {
            foreignKey: 'user_id',
            // targetKey:'id',
            // // sourceKey:'user_id',

        })
    }
    return User

}