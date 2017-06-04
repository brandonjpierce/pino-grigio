#! /usr/bin/env node
const pump = require('pump');
const grigio = require('./');
const { stdin, stdout } = process;

pump(stdin, grigio, stdout);
