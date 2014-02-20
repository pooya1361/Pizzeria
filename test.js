$(document).ready(function() {
	$('.menu').rotate({
		bind : {
			mouseover : function() {
				$(this).rotate({
					animateTo : 180
				});
			},
			mouseout : function() {
				$(this).rotate({
					animateTo : 0
				});
			}
		}

	});
});