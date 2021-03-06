Package.describe({
  summary: "Allows you to define and run db migrations.",
  version: "0.8.7",
  name: "clinical:migrations",
  git: "https://github.com/awatson1978/clinical-migrations.git"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use(['underscore', 'check', 'mongo'], 'server');
  api.add_files(['migrations_server.js'], "server");
  api.export('Migrations', 'server');
});

Package.on_test(function (api) {
  api.use(['clinical:migrations', 'tinytest']);
  api.add_files('migrations_tests.js', ['server']);
});
