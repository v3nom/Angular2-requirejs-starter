module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    manifest: {
      generate: {
        options: {
          basePath: './build/',
          timestamp: true,
          hash: true,
          exclude: ['index.html'],
          master: ['index.html'],
        },
        src: ['**/*.*'],
        dest: 'build/manifest.appcache'
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          src: ['index.html'],
          dest: 'build/',
          filter: 'isFile'
        },  {
          expand: true,
          src: ['lib/*.js'],
          dest: 'build/',
        }, {
          expand: true,
          src: ['style/**/*'],
          dest: 'build/',
        }]
      }
    },
    exec: {
      tsc: 'tsc'
    },
    postcss: {
      options: {
        processors: [require('autoprefixer')({
          browsers: ['last 2 versions', 'Android 4'],
        })]
      },
      dist: {
        src: 'build/**/*.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-manifest');

  // Default task(s).
  grunt.registerTask('default', ['copy:main', 'exec', 'postcss','manifest']);
};