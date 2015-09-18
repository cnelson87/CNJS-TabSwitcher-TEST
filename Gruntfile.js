
module.exports = function(grunt) {

	'use strict';

	var path = require('path');
	var pkg = grunt.file.readJSON('package.json');


	// Grunt task configuration
	grunt.initConfig({

		// Metadata
		pkg			: pkg,
		pkgName		: '<%= pkg.name %>',

		// file paths
		sourcePath			: './src',
		publicPath			: './public',

		// Copy bower installed components to dist folder.
		'bower': {
			install: {
				dest: '<%= publicPath %>/assets/',
				options: {
					stripJsAffix: true,
					keepExpandedHierarchy: false,
					expand: false
				}
			}
		},

		// Copy files and folders.
		'copy': {
			html: {
				files: [{
					cwd: '<%= sourcePath %>/html/',
					src: '**/*.*',
					dest: '<%= publicPath %>/',
					expand: true
				}]
			},
			styles: {
				files: [{
					cwd: '<%= sourcePath %>/styles/',
					src: '**/*.*',
					dest: '<%= publicPath %>/assets/',
					expand: true
				}]
			}
		}

	});
	// end Grunt task config


	// Load task plugins
	grunt.loadNpmTasks('grunt-bower');
	grunt.loadNpmTasks('grunt-contrib-copy');


	// Register custom tasks
	grunt.registerTask('build', ['copy', 'bower']);
	grunt.registerTask('run', ['build']);

};
