'use strict';

/**
 * hardening-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hardening-content.hardening-content');
