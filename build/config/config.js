"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  production: {
    secret: process.env.secret,
    MONGO_URI: process.env.conString,
    port: process.env.PORT
  },
  development: {
    secret: "I_AME_GERER",
    MONGO_URI: 'mongodb://localhost/CnS',
    port: 3000
  }
};

var getConfig = exports.getConfig = function getConfig(env) {
  return config['env'] || config.development;
};