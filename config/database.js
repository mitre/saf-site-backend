const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  let parsedUrl = undefined
  if (env("DATABASE_URL") !== undefined) {
    parsedUrl = parse(env("DATABASE_URL"));
  }
  return {
    connection: {
      client: "postgres",
      connection: {
        host: parsedUrl ? parsedUrl.host : env("DATABASE_HOST"),
        port: parsedUrl ? parsedUrl.port : env("DATABASE_PORT"),
        database: parsedUrl ? parsedUrl.database : env("DATABASE_NAME"),
        user: parsedUrl ? parsedUrl.user : env("DATABASE_USERNAME"),
        password: parsedUrl ? parsedUrl.password : env("DATABASE_PASSWORD"),
        schema: env("DATABASE_SCHEMA", "public"), // Not required
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        },
      },
      debug: false,
    },
  };
};