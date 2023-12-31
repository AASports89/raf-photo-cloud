//DEPENDECY & IMPORT//
const { Model, DataTypes } = require("mongoose");
const mongoose = require("../config/connection");
const bcrypt = require("bcrypt");

    class User extends Model {
//CHECK USER LOGIN --> BCRYPT//
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
        }
    };
//USER MODEL//
    User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            },
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
//FUNCTIONS BEFORE & AFTER CALLS --> SEQUELIZE//
        hooks: {
//USE DATA BEFORE NEW INSTANCE CREATED//
            async beforeCreate(newUserData) {
//ENCRYPT USER PASSWORD (HASH) --> BCRYPT//
                newUserData.password = await bcrypt.hash(
                    newUserData.password,
                    10
                );
                return newUserData;
            },
        },
        mongoose,
        freezeTableName: true,
        underscored: true,
        modelName: "user",
        }
    );

    module.exports = User;