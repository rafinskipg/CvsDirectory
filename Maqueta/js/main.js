
window.templates = Array();

templates.push('social');
templates.push('skills');
templates.push('experience');
templates.push('vcard');
templates.push('summary');
templates.push('education');
templates.push('hobbies');


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


window.createExperienceData = function( experienceOptions, selectorString){
	//Add the work experience
	$(selectorString).append(experience(experienceOptions));
}
window.createVCardData = function( vCardOptions, selectorString){
	//Add the vcard data to the template
	$(selectorString).append(vcard(vCardOptions));
}

window.createSummaryData = function( summaryOptions, selectorString){
	//Add the summary data to the template
	$(selectorString).append(summary(summaryOptions));
}

window.createEducationData = function(educationOptions,selectorString){
	//Add the education data to the template
	$(selectorString).append(education(educationOptions));
}

window.createHobbiesData = function(hobbiesOptions,selectorString){
	//Add hobbies data to the template
	$(selectorString).append(hobbies(hobbiesOptions));
}

window.createCVTemplates = function(){
	//$('body').css('background', "url('"+cv.vCardOptions.photo+"')");
	//$('body').css('background-size', "cover");
	//$('body').css('background-repeat', "no-repeat");
	
	//Vcard
	createVCardData(cv.vCardOptions, '.vcard');
	//Summary
	createSummaryData(cv.summaryOptions, '#summary');
	//Create social bar
	createSocialData(cv.socialOptions, 'body');
	//Create Skills block
	createSkillsData(cv.skillsOptions, '#skills');
	//Create Experience block
	createExperienceData(cv.experienceOptions, '#experience');
	//Create Education block
	createEducationData(cv.educationOptions, '#education');
	//Create Hobbies block
	createHobbiesData(cv.hobbiesOptions, '#hobbies');
	
}

window.init = function(){
	//animateGmailLogo();
	
	
	//Load JSON 
	$.get('data.json', function(data){
		console.log(data);
		cv = data;
		createCVTemplates();
	},'json');
	
	//Create slides
	var k = kontext( document.querySelector( '#container' ) );
	
	document.addEventListener( 'keyup', function( event ) {
		if( event.keyCode === 38 ) k.prev();
		if( event.keyCode === 40 ) k.next();
	}, false );

	
}
