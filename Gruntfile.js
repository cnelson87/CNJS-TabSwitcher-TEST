
module.exports = function(grunt) {

	'use strict';

	var path = require('path');


	// Project configuration.
	grunt.initConfig({

		// Metadata
		pkg			: grunt.file.readJSON('package.json'),
		pkgName		: '<%= pkg.name %>',
		pkgDesc		: '<%= pkg.description %>',


		// Copy bower files
		'bower': {
			dev: {
				dest: './assets'
			}
		}


	});
	// end Grunt task config

	// Load task dependencies
	require('load-grunt-tasks')(grunt);


	// Register custom tasks
	grunt.registerTask('build', ['bower']);

};
