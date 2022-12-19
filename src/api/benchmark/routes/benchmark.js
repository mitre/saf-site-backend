'use strict';

/**
 * benchmark router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::benchmark.benchmark');
