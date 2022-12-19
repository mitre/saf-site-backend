'use strict';

/**
 * benchmark controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::benchmark.benchmark');
