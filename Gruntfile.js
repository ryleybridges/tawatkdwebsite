module.exports = function(grunt){
    grunt.initConfig({
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: `css/`,
					src: [`*.css`, `!*.min.css`],
					dest: `css/`,
					ext: `.min.css`
				}]
			}
		},
		uglify: {
			my_target: {
				files: {
					'js/script.min.js': [`js/script.js`]
				},
				options: {
					esversion: 6
				}
			}
		},
		jshint: {
			files: [`js/*.js`, `!js/*.min.js`],
			options: {
				esversion: 6
			}
		},
		watch: {
			js: {
				files: [`js/*.js`, `!js/*.min.js`],
				tasks: [`jshint`, `uglify`]
			},
			sass: {
				files: [`scss/*.scss`],
				tasks: [`sass`]
			},
			cssmin: {
				files: [`css/*.css`, `!css/*.min.css`],
				tasks: [`cssmin`]
			}
		}
	});

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['watch']);
}
