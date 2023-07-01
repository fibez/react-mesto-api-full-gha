const corsSettings = {
  origin: ['http://127.0.0.1:3000', 'https://aedmestofront.nomoreparties.sbs', 'http://aedmestofront.nomoreparties.sbs'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

module.exports = {
  corsSettings,
};
