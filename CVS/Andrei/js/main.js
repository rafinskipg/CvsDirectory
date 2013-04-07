window.templates = Array();
templates.push('social');
templates.push('skills');


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

window.createSocialData = function(socialOptions, selectorString){
	//Add the social data to the template
	$(selectorString).append(social(socialOptions));
	$('.socialBar').addClass('animated');
	
	$('.arrow').bind('click', function(){
		$('.socialBar').toggleClass('moveInRight100');
	});
	
	$(window).on('scroll', function(e){
		//$('.socialBar').css('top', scrollY+30);
		$('.socialBar').animate({top:scrollY+30},{duration:500,queue:false});  
	});
}

window.createSkillsData = function( skillsOptions, selectorString){
	//Add the social data to the template
	$(selectorString).append(skills(skillsOptions));
}

window.init = function(){
	//animateGmailLogo();
	
	
	socialOptions = {
		twitter : 'www.twitter.com',
		facebook : 'www.facebook.com',
		youtube: 'gmail.com',
		linkedin: 'linkedin.com',
		github: 'github.com'
	}
	
	//Create social bar
	createSocialData(socialOptions, 'body');
	
	
	//Skills
	skillsOptions = {
		'skills':[
			{
				'title' : 'Design',
				'data' : [
					'webDesign',
					'UserInterface design',
					'alalalal'
				]
			}
		]
	}
	
	//Create Skills block
	createSkillsData(skillsOptions, '#skills');
	
}
