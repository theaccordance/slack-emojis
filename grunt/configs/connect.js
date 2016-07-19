module.exports = function (grunt) {
    "use strict";
    return {
        browser: {
            options: {
                hostname: 'localhost',
                port: 1413,
                base: 'preview/'
            }
        }
    };
};