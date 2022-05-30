'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "exercise", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2022-05-15T22:29:00.136Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "exercise",
        {
            // "id": {
            //     "type": Sequelize.INTEGER,
            //     "field": "Id",
            //     "autoIncrement": true,
            //     "primaryKey": true,
            //     "allowNull": false
            // },
            "exerciseId": {
                "type": Sequelize.INTEGER,
                "field": "exerciseId",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": true
            },
            "exerciseName": {
                "type": Sequelize.STRING(50),
                "field": "exerciseName",
                "allowNull": true
            },
            "exerciseDuration": {
                "type": Sequelize.STRING(50),
                "field": "exerciseDuration",
                "allowNull": true
            }
        },
        {}
    ]
}];

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
