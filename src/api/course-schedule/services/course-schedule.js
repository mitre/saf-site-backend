'use strict';

/**
 * course-schedule service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course-schedule.course-schedule');
