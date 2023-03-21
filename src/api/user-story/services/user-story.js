'use strict';

/**
 * user-story service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-story.user-story');
