require('babel-register')(
    {
        presets: ['env']
    }
)

module.exports = require('./app.js');

console.log('Module finished')