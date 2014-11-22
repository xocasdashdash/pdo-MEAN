'use strict';
var chai = require('chai');
chai.should();
global.expect = chai.expect;
global.assert = chai.assert;
global.request = require('supertest');