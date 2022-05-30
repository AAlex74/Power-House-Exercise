'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "id" from table "exercise"
 * changeColumn "exerciseId" on table "exercise"
 * changeColumn "exerciseId" on table "exercise"
 * changeColumn "exerciseId" on table "exercise"
 * changeColumn "exerciseId" on table "exercise"
 *
 **/

var info = {
    "revision": 3,
    "name": "exercise_model_exerciseType",
    "created": "2022-05-25T16:41:28.838Z",
    "comment": ""
};

var migrationCommands = [{
        // fn: "removeColumn",
        // params: ["exercise", "id"]
    },
    {
        fn: "changeColumn",
        params: [
            "exercise",
            "exerciseId",
            {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "exerciseId",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "exercise",
            "exerciseId",
            {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "exerciseId",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "exercise",
            "exerciseId",
            {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "exerciseId",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "exercise",
            "exerciseId",
            {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "exerciseId",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
