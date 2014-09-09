Package.describe({
  summary: "SlickGrid package for meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
      'lib/d3.js'
    ]
    ,'client'
  );
});
