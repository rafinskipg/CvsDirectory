$(document).ready(function(){
 
	animateGmailLogo();

});

window.animateGmailLogo = function(){
	$('.gmailLogo').bind('click', function(){
		alert('mail me at andrei preda@gmail.com');
	});
	$('.gmailLogo').hover( 
		function(){
			$('.gmailLogo').addClass('pulse');
		}, 
		function(){
			$('.gmailLogo').removeClass('pulse');
		}		
	);
	
	
	
	$('.gmailLogo').addClass('visible animated lightSpeedIn').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(){
						
						$(this).removeClass('lightSpeedIn');		
						
					});
	window.setTimeout(function() {
		
	}, 1000);

}