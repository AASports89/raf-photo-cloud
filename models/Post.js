//DEPENDENCY & IMPORT//
const { Model, DataTypes } = require("mongoose");
const mongoose = require("../config/connection");

    class Post extends Model {}

//POST MODEL//
    Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
            title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
            image: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
            comment: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
            author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
        {
        mongoose,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    });

    module.exports = Post;