// Do grunt-related things in here
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      cssport: {
        src: ['css/bootstrap.min.css',
              'css/starter-template.min.css',
              'css/sticky-footer.min.css',
              'css/academicons.min.css',
              'css/self.min.css'
              ],
        dest: 'css/portfolio-styles.concat.css',
      },

      cssblog: {
        src: ['css/bootstrap.min.css',
              'css/clean-blog.min.css',
              'css/monokai_sublime.min.css'
              ],
        dest: 'css/blog-styles.concat.css',
      } 
    },

    cssmin: {
      dynamic: {
        files: [
          {          
            expand: true,     // Enable dynamic expansion.
            cwd: 'css/src',      // Src matches are relative to this path.
            src: ['*.css'], // Actual pattern(s) to match.
            dest: 'css/min',   // Destination path prefix.
            ext: '.min.css',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          },
        ],
      }     
    },

    uglify: {
      // options: {
      //   banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      // },
      dynamic: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'js/src',      // Src matches are relative to this path.
            src: ['*.js'], // Actual pattern(s) to match.
            dest: 'js',   // Destination path prefix.
            ext: '.min.js',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          },
        ],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', [ 'cssmin:dynamic','uglify:dynamic', 'concat:cssblog', 'concat:cssport' ]);

};