module.exports = {
    async beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    let createdOrderId = data.order_id
    const entries = await strapi.entityService.findMany('api::documentation.documentation', {
        fields: ['order_id'],
        filters: { 
            order_id:{
                $gte: createdOrderId,
            },
        },
        sort: { order_id: 'DESC' },
      });

      console.log("XXXXXXXX Entries: ", entries)
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
  
    async afterCreate(event) {
    const { result, params } = event;
    
      // do something to the result;
    },
  };
   