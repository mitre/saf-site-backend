'use strict';

/**
 * documentation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::documentation.documentation');
