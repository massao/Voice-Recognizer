module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			dist: {
				files: {
					'public/javascript/global.js': [
						'src/scripts/main.js'
					]
				}
			}
		},
		sass: {
			compile: {
				options: {
					style: 'compressed'
				},
				files: {
					'public/css/global.css': [
						'src/sass/global.scss'
					]
				}
			}
		},
		copy: {
			main: {
				files:[
					{
						expand: true,
						cwd: 'src/',
						src: ['*'],
						dest: 'public/',
						filter: 'isFile'
					}
				]
			}
		},
		clean: {
			build: ['public']
		},
		watch: {
			html: {
				files: 'src/**/*.html',
				tasks: ['copy']
			},
			css: {
				files: 'src/**/*.scss',
				tasks: ['sass']
			},
			scripts: {
				files: 'src/**/*.js',
				tasks: ['uglify']
			}
		}
	});

	//grunt.loadNpmTasks('plugin-name');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Default task(s).
	grunt.registerTask('build', ['clean', 'copy', 'uglify', 'sass']);
	grunt.registerTask('default', ['watch']);
};
