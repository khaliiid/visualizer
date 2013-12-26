
define(['modules/defaultcontroller'], function(Default) {
	
	function controller() {};
	controller.prototype = $.extend(true, {}, Default, {

		onChange: function(mol, smiles) {
			this.setVarFromEvent('onStructureChange', smiles, 'smiles');
			this.setVarFromEvent('onStructureChange', new DataObject({type:"mol2d", value:mol}), 'mol');
		},

		/*configurationSend: {
			events: {
				onHover: {
					label: 'Hovers a node',
					description: ''
				}
			},
				rels: {
					'node': {
						label: 'Node',
						description: 'Returns the selected node element'
					}
				}	
		}, */
		
		configurationReceive: {
			
			mol: {
				type: ['number',"molfile2d"],
				label: 'Variable de test X'
			}

		},

		moduleInformations: {
		},

		actions: {
			rel: {
				
			}
		},

		actionsReceive: {
			
		},
variableReceive: {
	array: {
		type: ['array'],
		label: 'An array of object,
		description: ''
	}
}

		configurationStructure: function(section) {

			return {
				groups: {

					group: {

						options: {
							type: 'list'
						},

						fields: {
							
							aValue: {

								type: 'number'
								
							}
						}
					}
				}
			}
		},

		configAliases: {
			prefs: [ 'groups', 'group', 0, 'aValue', 0 ]
		}
	});

	return controller;
});

