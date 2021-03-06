Package.describe({
  summary: 'Syntactic sugar for blaze templates',
  name: 'space:template-controller',
  version: '0.1.0',
  git: 'https://github.com/meteor-space/template-controller.git'
});

Package.onUse(function(api) {

  // Have to stay on Meteor 1.2.1 to be compatible with all Meteor versions.
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'reactive-var',
    'templating',
    'blaze-html-templates'
  ], 'client');

  api.addFiles([
    'source/extendable-error.js',
    'source/template-controller.js'
  ], 'client');

  api.export('TemplateController');

});
