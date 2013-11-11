module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          debug: true
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect']);
}
