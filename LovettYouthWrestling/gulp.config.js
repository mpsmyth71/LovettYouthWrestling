module.exports = function () {
    // final destination for CSS and JS
    var libs = './libs/';

    var config = {
        // final destination for CSS
        libsCS: libs + 'css/',

        // Final destination for JS
        libsJS: libs + 'js/',

        // Final destination for Fonts
        libsFonts: libs + 'fonts/',

        // All the JS files for the website
        alljs: ['libs/js/**/*.js','./*.js'],

        // Destination of index HTML
        client: './',

        // Location of index HTML
        index: './index.html',
        
        js: 'js/**/*.js',

        // Location of Less Files for Bower
        less: './bower_components/**/*.less',

        //bower: {
        //    json: require('./bower.json'),
        //    directory: './bower_components/',
        //    ignorePath: '../..'
        //}
    };

    //config.getWireDepOptions = function () {
    //    var options = {
    //        bowerJson: config.bower.json,
    //        directory: config.bower.directory,
    //        ignorePath: config.bower.ignorePath
    //    };

    //    return options;
    //};

    return config;
};