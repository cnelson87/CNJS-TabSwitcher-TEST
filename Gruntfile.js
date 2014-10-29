
module.exports = function(grunt) {

	'use strict';

	var path = require('path');
	var pkg = grunt.file.readJSON('package.json');


	// Grunt task configuration
	grunt.initConfig({

		// Metadata
		pkg			: pkg,
		pkgName		: '<%= pkg.name %>',

		// public file paths
		publicPath			: './public',
		publicAssets		: '<%= publicPath %>/assets',

		// Copy bower files
		'bower': {
			assets: {
				options: {
					stripJsAffix: true,
					keepExpandedHierarchy: false,
					expand: false
				},
				dest: '<%= publicAssets %>'
			}
		}

	});
	// end Grunt task config


	// Load task plugins
	grunt.loadNpmTasks('grunt-bower');


	// Register custom tasks
	grunt.registerTask('build', ['bower']);
	grunt.registerTask('run', ['build']);

};
