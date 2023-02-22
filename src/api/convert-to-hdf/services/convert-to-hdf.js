'use strict';

/**
 * convert-to-hdf service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::convert-to-hdf.convert-to-hdf');
