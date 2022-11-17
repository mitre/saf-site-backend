module.exports = {
  async beforeCreate(event) {
  const { data, where, select, populate } = event.params;
  const entries = await strapi.entityService.findMany('api::course-meeting.course-meeting', {
      fields: ['index'],
      filters: { 
          index:{
              $gte: data.index,
          },
      },
      sort: { index: 'DESC' },
    });

    if (entries.length > 1){
      for (entry of entries){
          await strapi.entityService.update('api::course-meeting.course-meeting', entry.id, {
              data: {
                index: (parseInt(entry.index) + 1),
              },
            });
        }
    }
  },

  async afterDelete(event) {
    const entries = await strapi.entityService.findMany('api::course-meeting.course-meeting', {
        fields: ['index'],
        filters: { 
            index:{
                $gte: event.result.index,
            },
        },
        sort: { index: 'DESC' },
      });

      if (entries.length > 1){
        for (entry of entries){
            await strapi.entityService.update('api::course-meeting.course-meeting', entry.id, {
                data: {
                  index: (parseInt(entry.index) - 1),
                },
              });
          }
      }
  },
};