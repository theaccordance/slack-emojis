module.exports = function (grunt) {
    "use strict";
    return {
		emojis: {expand: true, cwd: 'emojis/', src: ['**'], dest: 'preview/emojis/', filter: 'isFile'},
        public: {
            files: [
                {expand: true, cwd: 'public/assets/', src: ['*'], dest: 'preview/assets', filter: 'isFile'},
                {expand: true, cwd: 'public/css/', src: ['*'], dest: 'preview/css', filter: 'isFile'}
            ]
        },
        index: {
            options: {
                process: function (content) {
                    return grunt.template.process(content);
                }
            },
            src: 'public/index.html',
            dest: 'preview/index.html'
        },
    };
};
