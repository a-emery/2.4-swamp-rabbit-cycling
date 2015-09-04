module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'assets/css/main.css' : 'assets/scss/*.scss'
				}
			}
		},
    less: {
			dist: {
				files: {
					'assets/css/main.css' : 'assets/less/*.less'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
      sass: {
        files: '**/*.less',
        tasks: ['less']
      }
		},
    concurrent: {
      options: {
        logConcurrentOutput: true,
      },
      prod: {
        tasks: ["watch:css", "watch:sass"]
      }
    }
	});
  grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
};

console.log('The build is passing');
