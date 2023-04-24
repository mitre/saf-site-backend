'use strict';

/**
 * tenet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tenet.tenet');
