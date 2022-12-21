'use strict';

/**
 * guidance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guidance.guidance');
