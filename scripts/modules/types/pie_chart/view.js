define(['modules/defaultview', 'util/datatraversing', 'util/domdeferred', 'util/api', 'util/typerenderer'], function(Default, Traversing, DomDeferred, API, Renderer) {
	
	function view() {};
	view.prototype = $.extend(true, {}, Default, {

		init: function() {	
			var html = "";
			html += '<div></div>';
			
			
			this.dom = $( html ).css( { 
				display: 'table',
				height: '100%',
				width: '100%'
			} );

			this.module.getDomContent( ).html( this.dom );
			this.fillWithVal( this.module.getConfiguration( 'defaultvalue' ) );
		},
		
		blank: {
			value: function(varName) {
				this.dom.empty();
			}
		},
		
		inDom: function() {},

		update: {
			'color': function(color) {

				if( color === undefined ) {
					return;
				}
				
				this.module.getDomContent( ).css( 'backgroundColor', color );
			},

			'value': function(moduleValue) {
				var view = this,
					sprintfVal = this.module.getConfiguration('sprintf');
var G = this.module.getDomContent( );
				if( moduleValue == undefined ) {

					this.fillWithVal( this.module.getConfiguration('defaultvalue') || '' );
					

				} else {

					Renderer.toScreen( moduleValue, this.module ).always(function(val) {
						
							view.fillWithVal( val );
							//var d = G.;
							
							var c = document.getElementById('klawi');
							//zz = c.value;
							alert(c.innerHTML);
							//console.log(c);
							
var vn = "<script type=text/javascript>var data = [], series = 700;data[0] = {label: Series0,data: 200} data[1] = {label: Series1 ,data: 111}</script>";
//vn += " var data = [];";
//vn += "var data = [], series = 700;data[0] = {label: 'Series0',data: 200} data[1] = {label: 'Series1' ,data: 111}</script>";
				

		


		
vn += $("<iframe style='height: inherit;width: inherit;'/>").attr('src', require.toUrl('./modules/types/pie_chart/jsme.html'));
							//var HGHG = c.innerHTML;
							view.dom.html( vn );
			//var div = $("<div  id='klawi'/>")
			
			DomDeferred.notifywith( vn );
			
	

						
							
						

					});

				}
			}
		},
		
		fillWithVal: function(val) {
			
			var valign = this.module.getConfiguration('valign'),
				align = this.module.getConfiguration('align'),
				fontcolor = this.module.getConfiguration('fontcolor'),
				fontsize = this.module.getConfiguration('fontsize'),
				font = this.module.getConfiguration('font'),
				preformatted = this.module.getConfiguration('preformatted');
			
			var div = $("<div  id='klawi'/>").css( {
				fontFamily: font || 'Arial',
				fontSize: fontsize || '10pt',
				color: fontcolor || '#000000',
				display: 'none',
				'vertical-align': valign || 'top',
				textAlign: align || 'center',
				width: '100%',
				height: '100%',
				'white-space': preformatted || 'normal'
			} ).html( val );

//			if (preformatted) div.html("<pre />").html( val );
							//this.module.getDomContent().html(vn);
							
			this.dom.html( div );
			DomDeferred.notify( div );
			
		},
		
		getDom: function() {
			return this.dom;
		},
		
		typeToScreen: {}
	});

	return view;
});