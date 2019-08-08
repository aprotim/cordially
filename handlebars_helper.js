Handlebars.registerHelper('helperMissing', function(/* [args, ] options */) {
    var options = arguments[arguments.length - 1];
    return 'MISSING VALUE: ' + options.name;
});