/*

	Jake Wendt, 2007

*/
Effect.Flicker = Class.create();
Object.extend(Object.extend(Effect.Flicker.prototype, Effect.Base.prototype), {
	initialize: function(element) {
		this.element = $(element);
		if(!this.element) throw(Effect._elementDoesNotExistError);
		if ( ! this.element.effectOn ) {
			this.element.effectOn = true;
			var options = Object.extend({
				threshold: 0.5,
				endvisibility: "visible"
			}, arguments[1] || {});
			this.start(options);
		}
	},
	update: function(position) {
		var visibility = ( Math.random() < this.options.threshold ) ? "hidden" : "visible";
		this.element.setStyle({
			visibility: visibility
		});
	},
	finish: function() {
		this.element.setStyle({
			visibility: this.options.endvisibility
		});
//		delete(this.element.effectOn);
		this.element.effectOn = false;
	}
});
