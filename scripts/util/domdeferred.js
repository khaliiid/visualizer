define(function() {
	var deferred = $.Deferred();
	return {
		notify: function(dom) {
			deferred.notify(dom);
		},
		notifywith: function(domm) {
			deferred.notifyWith(domm);
		},
		progress: deferred.progress
	}
});