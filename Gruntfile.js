module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      build: {
        files: [{
            expand: true,
            cwd: 'source/js',
            src: 'main.js',
            dest: 'pub/js',
            ext: '.min.js'
        }]
      }
    }, 
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'source/css/',
          src: ['main.css', 'bootstrap.css', 'bootstrap-grid.css', 'bootstrap-reboot.css'],
          dest: 'pub/css',
          ext: '.min.css'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: 'source/',
          src: '{,*/}*.html',
          dest: 'pub/'
        }]
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'source/images',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: 'pub/images'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'source',
          src: ['*.{ico,txt,md,json,xml}', '.*'],
          dest: 'pub'
        }]
      }
    }
    
    // ...
  });
  

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['cssmin', 'uglify', 'htmlmin', 'imagemin', 'copy']);
 
};