//DEPENDECY & IMPORT//
const { Schema, model } = require("mongoose");
const mongoose = require("../config/connection");
const bcrypt = require("bcrypt");

//USER MODEL//
const userSchema = new Schema(
    {
        id: {
            type: Number,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: String,
            allowNull: false,
        },
        email: {
            type: String,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: String,
            allowNull: false,
            validate: {
                len: [6],
            },
        },
        isAdmin: {
            type: Boolean,
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

    userSchema.virtual('userCount').get(function () 
    {
        return this.users.length;
    });

    const User = model("User", userSchema);

    module.exports = User;