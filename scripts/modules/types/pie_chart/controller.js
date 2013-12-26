define(['modules/defaultcontroller'], function(Default) {
 
 function controller() {};
 controller.prototype = $.extend(true, {}, Default, {

  configurationSend: {
   events: {
    
   },
   
   rels: {
    
   }
  },
  
  
  configurationReceive: {
   "value": {
    type: ['chart'],
    label: 'chart',
    description: ''
   },
  },
  
  
  moduleInformations: {
   moduleName: 'pie_chart'
  },
  

  configurationStructure: function(section) {
   
   return {

		groups: {

			group: {
				options: {
				type: 'text'
				},
		fields: {
				x: 'text'
      }
     }
    }
   };
  },
  
  configFunctions: {
   'preformatted': function(cfg) { return cfg.indexOf('pre')==-1?'normal':'pre'; }
  },

  configAliases: {
   'x': [ 'groups', 'group', 0, 'x']
  }
 });

 return controller;
});
 










