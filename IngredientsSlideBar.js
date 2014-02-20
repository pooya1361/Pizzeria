$(document).ready(function() {
	// Moves the clicked ingredient to the middle of slidebar
	$('.ingredient').each(function(){
		$(this).click(function() {
			var imgWidth = $(this).outerWidth();
			var imgLeft = $(this).position().left;
			var fixedBarWidth = $('#fixedPart').outerWidth();
			var move = -imgLeft + (fixedBarWidth / 2 - imgWidth / 2);
			// Checks if movement will cause the slidebar out of boundries
			if ($('#fixedPart').outerWidth() - move > $('#slideBar').outerWidth()) {
				move = $('#fixedPart').outerWidth() - $('#slideBar').outerWidth();
			} else if (move > 0) {
				move = 0;
			}
			$('#slideBar').animate({ left: move}, { duration: 500 , easing: "swing" } );	
			//$(this).css('border', '2px blue solid');
		});		
	});

	// The right button in the slidebar moves it to the right
	var mouseStillDown = false;
	
	function shiftToRight() {
	    if (!mouseStillDown) { return; } 
		var cur = ($('#slideBar').position().left - $('#leftButton').outerWidth()) - $('.ingredient').outerWidth();
		// Checks if movement will cause the slidebar out of right edge
		if ($('#fixedPart').outerWidth() - cur > $('#slideBar').outerWidth()) {
			cur = $('#fixedPart').outerWidth() - $('#slideBar').outerWidth();
		}
		$('#slideBar').animate({ left: cur}, { duration: 500 , easing: "swing" } );
		console.log(mouseStillDown);
	    //if (mouseStillDown) { setTimeout(shiftToRight(), 500); }
	};
		
	$('#rightButton').mousedown(function() {
	    mouseStillDown = true;
	    shiftToRight();
	}).mouseup(function() {
		//clearInterval(mouseStillDown);
		console.log('mouse up');
	    mouseStillDown = false;
	});
	

	// The left button in the slidebar moves it to the left
	$('#leftButton').click(function() {
		var cur =  ($('#slideBar').position().left - $('#leftButton').outerWidth()) + $('.ingredient').width();
		// Checks if movement will cause the slidebar out of left edge
		if (cur > 0) {
			cur = 0;
		}
		$('#slideBar').animate({ left: cur}, { duration: 500 , easing: "swing" } );
	});
});

// Sets the width of the slidebar so all images can fit inside in one line
$(window).load(function() {
	var totalWidth = 0;
	var ingredients = $('.ingredient');
	ingredients.each(function() {
		totalWidth += $(this).outerWidth();
	});
	$('#slideBar').width(totalWidth);
});