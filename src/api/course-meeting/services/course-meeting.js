'use strict';

/**
 * course-meeting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-meeting.course-meeting');
