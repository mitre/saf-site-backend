'use strict';

/**
 * json-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::json-content.json-content');
