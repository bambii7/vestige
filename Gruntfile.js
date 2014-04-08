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

        // compress
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/vestige.js', 'src/*.js'],
                dest: 'dist/<%= pkg.name %>-v<%= pkg.version %>.js',
            }
        },

        // ugly, exporting to min folder for individual size ref
        uglify: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '*.js',
                    dest: 'min'
                }]
            }
        }

    });

    //Dependencies.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Tasks.
    grunt.registerTask('default', ['uglify', 'concat']);

};