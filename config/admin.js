module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7396046a9eed089e536d31beff252071'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
