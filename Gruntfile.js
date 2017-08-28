/**
 * Created by alexis.hope on 26/03/14.
 */
module.exports = function(grunt) {
    //Configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json') ,

        // watch
        watch: {
            js: {
                files: ['src/**/*.js'],
                tasks: ['concat', 'uglify']
            }
        },

        // compress
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/vestige.js', 'src/**/*.js'],
                dest: 'build/<%= pkg.name %>-v<%= pkg.version %>.js',
            }
        },

        // ugly, exporting to min folder for individual size ref
        uglify: {
            options: {
                mangle: true
            },
            target: {
                files: {
                    'build/<%= pkg.name %>-v<%= pkg.version %>.min.js': 'build/<%= pkg.name %>-v<%= pkg.version %>.js'
                }
            }
        },
      
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'build/<%= pkg.name %>-v<%= pkg.version %>.js': 'build/<%= pkg.name %>-v<%= pkg.version %>.js'
                }
            }
        }

    });

    //Dependencies.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

    //Tasks.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['concat', 'babel', 'uglify']);

};
