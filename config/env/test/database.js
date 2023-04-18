module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'test',
      user: 'localUser',
      password: 'localPassword',
      // filename: env('DATABASE_FILENAME', '.tmp/test.db'),
      ssl: false,
    },
    useNullAsDefault: true,
    debug: false
  },
});

