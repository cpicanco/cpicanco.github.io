// Do grunt-related things in here
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      csscover: {
        src: ['css/min/cover.min.css'],
        dest: 'css/cover-styles.concat.css',
      }
    },

    cssmin: {
      dynamic: {
        files: [
          {          
            expand: true,     // Enable dynamic expansion.
            cwd: 'css/src',      // Src matches are relative to this path.
            src: ['*.css', '!achievements-full.css'], // Actual pattern(s) to match.
            dest: 'css/min',   // Destination path prefix.
            ext: '.min.css',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          },
        ],
      }     
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', [ 'cssmin:dynamic', 'concat' ]);

};