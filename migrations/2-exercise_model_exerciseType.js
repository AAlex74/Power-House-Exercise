'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "exerciseType" to table "exercise"
 *
 **/

var info = {
    "revision": 2,
    "name": "exercise_model_exerciseType",
    "created": "2022-05-15T22:34:39.727Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "exercise",
        "exerciseType",
        {
            "type": Sequelize.STRING,
            "field": "exerciseType",
            "allowNull": true
        }
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
