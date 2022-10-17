module.exports = {
    async beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    const entries = await strapi.entityService.findMany('api::documentation.documentation', {
        fields: ['order_id'],
        filters: { 
            order_id:{
                $gte: data.order_id,
            },
        },
        sort: { order_id: 'DESC' },
      });

      if (entries.length > 1){
        for (entry of entries){
            await strapi.entityService.update('api::documentation.documentation', entry.id, {
                data: {
                  order_id: (parseInt(entry.order_id) + 1),
                },
              });
          }
      }
    },
  
    async afterDelete(event) {
      const entries = await strapi.entityService.findMany('api::documentation.documentation', {
          fields: ['order_id'],
          filters: { 
              order_id:{
                  $gte: event.result.order_id,
              },
          },
          sort: { order_id: 'DESC' },
        });

        if (entries.length > 1){
          for (entry of entries){
              await strapi.entityService.update('api::documentation.documentation', entry.id, {
                  data: {
                    order_id: (parseInt(entry.order_id) - 1),
                  },
                });
            }
        }
    },
  };
   