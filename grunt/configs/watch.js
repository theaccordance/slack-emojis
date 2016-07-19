module.exports = function (grunt) {
    "use strict";
    return {
        public: {
            files: ['public/**/*'],
            tasks: ['build']
        }
    };
};