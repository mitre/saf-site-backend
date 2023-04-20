module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env("DATABASE_HOST"),
      port: env("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      // filename: env('DATABASE_FILENAME', '.tmp/test.db'),
      ssl: false,
    },
    useNullAsDefault: true,
    debug: false
  },
});

