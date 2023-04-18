module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/test.db'),
      ssl: false,
    },
    useNullAsDefault: true,
    debug: false
  },
});