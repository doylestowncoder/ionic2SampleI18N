#!/usr/bin/env node

var fs = require("fs.extra");

var fsCallback = function (err) {
    if (err) {
        console.error("Failed to create directory or file.");
        throw err;
    }
}

var platforms = (process.env.CORDOVA_PLATFORMS ? process.env.CORDOVA_PLATFORMS.split(',') : []);

if (platforms.indexOf('android') > -1) {
    console.log("Adding I18N App Name for Android");

    // Copy over the English Resource Files
    fs.copy('resources/android/values/strings.xml', 'platforms/android/res/values/strings.xml', { replace: true }, fsCallback);

    // Copy over the French Resource Files
    fs.mkdirp('platforms/android/res/values-fr', fsCallback);
    fs.copy('resources/android/values-fr/strings.xml', 'platforms/android/res/values-fr/strings.xml', { replace: true }, fsCallback);

    // Copy over the Spanish Resource Files
    fs.mkdirp('platforms/android/res/values-es', fsCallback);
    fs.copy('resources/android/values-es/strings.xml', 'platforms/android/res/values-es/strings.xml', { replace: true }, fsCallback);

    console.log('Added I18N Resource Files for Android');
} else {
    console.warn('I18N Resource Files were NOT added for Android');
}
