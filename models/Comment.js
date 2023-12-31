//DEPENDENCY & IMPORT//
    const { Model, DataTypes } = require("mongoose");
    const mongoose = require("../config/connection");

    class Comment extends Model {}

//COMMENT MODEL//
    Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
            comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
            image: {
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
            post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "post",
                key: "id",
            },
        },
    },
        {
        mongoose,
        freezeTableName: true,
        underscored: true,
        modelName: "comment",
    });

    module.exports = Comment;