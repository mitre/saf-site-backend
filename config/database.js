const parse = require('pg-connection-string').parse;
const config = parse("postgres://postgres@127.0.0.1:5432/strapi");

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: false
    },
    debug: false,
  },
});