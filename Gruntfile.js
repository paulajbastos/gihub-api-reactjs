module.exports = function (grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
			main:{
				files:{
					'./public/main.css' : './app/styles/sass/main.scss'
				}
			}
		},
		watch: {
			styles: {
				files: [
					'./app/styles/sass/**/*.scss',
					'./app/styles/sass/**/*.sass'
				],
				tasks: ['sass:main', 'postcss:main'],
				//MUST INSTALL LIVE RELOAD ADDON FOR YOUR BROWSER
				options: {
					livereload: true
				}
			}
		},
		jshint: {
			options: {
				browser: true
			},
			all: ['Gruntfile.js']
		},
		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer')(
					{
						browsers: ['last 8 versions', 'ie 9'],
						map:true
					})
				]
			},
			main: {
				files: {
					'./public/main.css': './public/main.css'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-postcss');

	grunt.registerTask('prodcss', ['watch:styles']);
	grunt.registerTask('prodjs', ['watch:scripts']);

	// GENERAL Task(s).
	grunt.registerTask('default', ['watch:']);
	grunt.registerTask('test', ['jshint']);
	
};

/*
Another reason of same problem is dependency mess.
This solution help rare times, (as for me just now):

rm -rf node_modules
npm install*/