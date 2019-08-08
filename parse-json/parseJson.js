/* eslint-disable */
const chalk = require('chalk');
const fs = require('fs-extra');
const os = require('os');
const path = require('path');
const packageJson = require('./package.json');

const errorLogFilePatterns= [
  'npm-debug.log',
];

function parseJson(...args) {
  return args;
}

export {
  parseJson,
};
