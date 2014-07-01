/**
 * Created by alexis.hope on 26/03/14.
 */
module.exports = function(grunt) {
    //Configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json') ,
        qunit: {
            all: ['test/index.html', 'test/loading.html']
        },
        
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
                dest: 'dist/<%= pkg.name %>-v<%= pkg.version %>.js',
            }
        },

        // ugly, exporting to min folder for individual size ref
        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'dist/<%= pkg.name %>-v<%= pkg.version %>.min.js': 'dist/<%= pkg.name %>-v<%= pkg.version %>.js'
                }
            }
        }

    });

    //Dependencies.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Tasks.
    grunt.registerTask('default', ['watch']);

};