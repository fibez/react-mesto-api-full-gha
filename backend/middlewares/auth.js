/* eslint-disable linebreak-style */
const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../utils/errors/Unauthorized');
const { secretKey } = require('../utils/constants');

async function auth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError('Отсутствует токен авторизации'));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, secretKey);
    req.user = payload;
    return next();
  } catch (error) {
    return next(new UnauthorizedError('Неверный токен авторизации'));
  }
}

module.exports = { auth };
