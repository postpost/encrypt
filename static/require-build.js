({
  baseUrl: ".",
  findNestedDependencies: true,
  preserveLicenseComments: false,
  optimize: "uglify2",
  generateSourceMaps: false,
  name: "main",
  out: "main.min.js",
  "paths": {
      "txt": "libs/require/plugins/text",
      "css": "libs/require/plugins/css",
      "jquery": "libs/jquery/jquery-2.1.0.min",
      "jquery.autosize": "libs/jquery/plugins/jquery.autosize.min",
      "bootstrap": "libs/bootstrap/bootstrap-3.1.1.min",
      "bootstrap.mods": "mods/bootstrap.mods",
      "bootbox": "libs/bootbox/bootbox.min",
      "underscore": "libs/underscore/underscore-1.6.0.min",
      "backbone": "libs/backbone/backbone-1.1.2.min",
      "sha256": "libs/movabletype/sha256",
      "aes": "libs/movabletype/aes",
      "add2home": "libs/add2home/add2home",
      "dropbox": "libs/dropbox/dropbox-0.10.2",

      "css-build": "libs/require/plugins/css-build"
  } 
})
