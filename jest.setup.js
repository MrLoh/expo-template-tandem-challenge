require('@testing-library/jest-native/extend-expect');

global.self = global;
global.window = {};
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
global.Promise = require('promise-polyfill');
global.FormData = require('form-data');
