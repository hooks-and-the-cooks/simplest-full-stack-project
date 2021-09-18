/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('todo',
        {
            todo_id: 'id',
            description: {
                type: 'varchar(255)',
            }
        })
};
