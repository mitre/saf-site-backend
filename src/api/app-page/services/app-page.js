'use strict';

/**
 * app-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-page.app-page');
