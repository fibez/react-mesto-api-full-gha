const urlPattern = /https?:\/\/w{0,3}\.?[\w0-9-]{1,10}\.\w{2,3}[\w\d\-._~:/?#[\]@!$&'()*+,;=]{0,}/i;
const secretKey = process.env.JWT_SECRET || 'devSecretKey';

module.exports = {
  urlPattern,
  secretKey,
};
