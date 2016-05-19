module.exports = function (grunt) {
    "use strict";
    return {
		emojis: {expand: true, cwd: 'emojis/', src: ['**'], dest: 'preview/img/', filter: 'isFile'},
        index: {
            options: {
                process: function (content) {
                    return grunt.template.process(content);
                }
            },
            src: 'grunt/templates/index.html',
            dest: 'preview/index.html'
        },
    };
};
