'use strict';

/**
 * benchmark service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::benchmark.benchmark');
