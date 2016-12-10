module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      build: {
        files: [{
            expand: true,
            cwd: 'source_about/js',
            src: 'main.js',
            dest: 'docs/js',
            ext: '.min.js'
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'source_about/styles/',
          src: ['main.css'],
          dest: 'docs/styles',
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
          cwd: 'source_about/',
          src: '{,*/}*.html',
          dest: 'docs/'
        }]
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'source_about/images',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: 'docs/images'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'source_about',
          src: ['*.{ico,txt,md,json,xml}', '.*', '**'],
          dest: 'docs'
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