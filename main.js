$(document).ready(function() {
	$('h1').rotate({
		bind : {
			mouseover : function() {
				$(this).rotate({
					animateTo : 180
				});
			},
			mouseout : function() {
				$(this).rotate({
					animateTo : -5
				});
			}
		}

	});
});