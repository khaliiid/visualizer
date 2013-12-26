define(['modules/defaultcontroller', 'util/datatraversing', 'util/api'], function(Default, Traversing, API) {
	
	function controller() {

	};

	controller.prototype = $.extend(true, {}, Default, {

		onJSMolScriptReceive:function(a){
			this.module.view.executeScript(a.value);
		},

		configurationSend: {

			events: {

			},

			rels: {

			}
		},
		
		configurationReceive: {
			data: {
				type: ['number'],
				label: 'Series1',
				description: ''
			}
			
		},
		
		
		moduleInformations: {
			moduleName: 'pie_chart'
		},
		
		configurationStructure: function(section) {
			
			// var jpaths = this.module.model.getjPath();

			return {
				groups: {
					group: {
						options: {
							type: 'list'
						},

						fields: {
							script: {
								type: 'jscode',
								title: 'After load script'
							}
						}
					}
				}
			}		
		},

		configAliases: {
			'script': [ 'groups', 'group', 0, 'script', 0 ]
		},

		actions: {
			rel: {}
		},

		actionsReceive: {
			'jsmolscript': 'Some JSMol Script recieved'
		}

	});

	return controller;
});