const pgtools = require('pgtools');

const config = {
  user: 'dbuser',
  host: '127.0.0.1',
  password: 'dbpass',
  port: 5432,
};

pgtools.dropdb(config, 'database', (err, res) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});
