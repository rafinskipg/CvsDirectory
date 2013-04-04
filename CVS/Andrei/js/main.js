window.templates = Array();
templates.push('social');


window.loadTemplates = function( callback){
	//Load all the templates
	var deferreds = [];

	$.each(templates, function(index, template) {
		
		deferreds.push($.get('../../templates/'+template+'.html', function(data) {
			window[template] = _.template(data);
		}, 'html'));
		
	});

	$.when.apply(null, deferreds).done(callback);

}

//Load the templates and trigger init at the end.
$(document).ready(function(){
	loadTemplates( function(){
		init();
	});
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
}

window.init = function(){
	animateGmailLogo();
	
	socialOptions = {
		twitter : 'www.twitter.com',
		facebook : 'www.facebook.com',
		gmail: 'gmail.com',
		linkedin: 'linkedin.com',
		github: 'github.com'
	}
	//Add the social data to the template
	$('.socialBar').append(social(socialOptions));
	$('.socialBar').addClass('animated');
	
	$('.arrow').bind('click', function(){
		$('.socialBar').toggleClass('moveInRight100');
	});
}
