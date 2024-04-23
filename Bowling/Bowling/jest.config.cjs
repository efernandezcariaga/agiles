/* eslint-disable no-undef */
module.exports = {
  testEnvironment: 'jsdom', // Ambiente de prueba
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transformador para Babel
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // Para manejar importaciones de CSS
  },
};
