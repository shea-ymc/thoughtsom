module.exports = (function () {
    'use strict';
    return require('./parent-config')('/thoughtsom', process.env.HOME);
}());
