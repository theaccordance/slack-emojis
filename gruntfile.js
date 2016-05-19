function init(grunt) {
    "use strict";
    function loadConfig(pattern) {
        var config = {},
            fileName,
            fileData;

        grunt.file.expand(pattern).forEach(function (filePath) {
            fileName = filePath.split('/').pop().split('.')[0];
            fileData = require('./' + filePath)(grunt);
            config[fileName] = fileData;
        });

        return config;
    }

    function loadGrunt() {
        var config = {
            pkg: grunt.file.readJSON('package.json')
        };

        require('load-grunt-tasks')(grunt);

        if (grunt.file.exists('grunt/tasks')) {
            grunt.log.writeln('task directory found, loading tasks...');
            grunt.loadTasks('grunt/tasks');
        }

        grunt.util._.extend(config, loadConfig('grunt/configs/**/*.js'));

        grunt.initConfig(config);
    }
    loadGrunt();

    function build() {
		var emojis = []
		grunt.file.expand({filter: 'isFile'},'emojis/**').forEach(function (filePath) {
			emojis.push({
				name:  filePath.split('/').pop().split('.')[0],
				src: filePath.split('/').pop()
			});
		});
		console.log(emojis);
		grunt.config('emojis', emojis);
		grunt.task.run('copy');
	}

	 grunt.registerTask('default', build);
}

module.exports = init;
