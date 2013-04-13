
window.templates = Array();

templates.push('social');
templates.push('skills');
templates.push('experience');
templates.push('vcard');
templates.push('summary');
templates.push('education');
templates.push('hobbies');
templates.push('languages');


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

window.createLanguagesData = function(languagesOptions,selectorString){
	//Add languages data to the template
	$(selectorString).append(languages(languagesOptions));
}

window.init = function(){
	//animateGmailLogo();
	//Create VCard Options
	vCardOptions = {
		photo : 'img/perfil.jpg',
		name : 'Andrei Preda',
		email : 'predaandrei3@gmail.com',
		phone : '666 33 55 66',
		website : 'www.andrei.com',
		locality : 'Madrid',
		country : 'Spain',
		aditional : '@andrei',
		job_position : 'back-end Developer'
	
	}
	createVCardData(vCardOptions, '.vcard');
	
	//Create Summary 
	summaryOptions = {
		summary : '<p>Web Designer and Front-end Developer since 2003. Worked for agencies and as a freelancer for companies in Brazil, Europe and Asia.</p>' +
					 '<p>Focus on designing user interfaces for websites and developing semantic, responsive and reusable code aiming for best performance on browsers and devices.</p>'+
					 '<p>A programmer by education (graduated in Computer Science) and (interface) designer by heart. Also a blogger at jpedroribeiro.com, where several web related topics are written, from book reviews to how-to guides on development and design.</p>'
	}
	createSummaryData(summaryOptions, '#summary');
	
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
		skills:[
			{
				title 	: 	'Dise&ntilde;o',
				data 	: 	[
								'Dise&ntilde;o de p&aacute;ginas web',
							]
			},{
				title	:	'Programaci&oacute;n',
				data	:	[
								'PHP',
								'JavaScript',
								'ExtJS',
								'Java',
								'CSS',
								'JSP',
								'HTML'
							]
			},{
				title	:	'Bases de datos',
				data	:	[
								'MySQL',
								'SQL Server',
								'Oracle'
							]
			}
		]
	}
	
	//Create Skills block
	createSkillsData(skillsOptions, '#skills');
	
	//Experience
	experienceOptions = {
		'experience': [
			{
				title		:	'Instituto Espa&ntilde;ol de Comercio Exterior',
				link		:	'www.icex.es',
				country		:	'Madrid - Espa&ntilde;a',
				functions	:	'Programador',
				start		:	'Noviembre 2012',
				end			:	'Actualmente',
				description	:	'Programando la nueva p&aacute;gina web del Instituto Espa&ntilde;ol de Comercio Exterior. Desarrollo realizado en JSP con la librer&iacute;a JSTL '+
								'y UCM. Programaci&oacute;n con J2EE'
			},{
				title 		: 	'Nervia Consultores',
				link		:	'www.gruponervia.com',
				country		:	'Zaragoza - Espa&ntilde;a' ,
				functions	:	'Programador, Sistemas',
				start		:	'Enero 2011',
				end			:	'Actualmente',
				description	:	'Programador de aplicaciones en UCM con J2EE y ExtJS. <br /> Responsable de sistemas y del entorno virtualizado. <br />Participaci&oacute;n en varios '+
								'proyectos en diferentes equipos llegando a ser m&aacute;ximo responsable de desarrollo y mantenimiento de la aplicaci&oacute;n'
			},{
				title		:	'INSINEC',
				link		:	'www.insinec.es',
				country		:	'Alca&ntilde;iz - Teruel',
				functions	:	'Pr&aacute;cticas/Becario',
				start		:	'Mayo 2010',
				end			:	'Julio 2010',
				description	:	'Programaci&oacute;n en php, javascript,uso de ajax, sql server, montaje y mantenimiento de equipos inform&aacute;ticos'
			},{
				title		:	'AERONA SOFTWARE',
				link		:	'www.aerona.com',
				country		:	'Derry - Irlanda del Norte',
				functions	:	'Pr&aacute;cticas/Becario',
				start		:	'Abril 2010',
				end			:	'Mayo 2010',
				description	:	'Programador en php y mantenimiento de p&aacute;ginas web'
			}
		]	
	}
	
	//Create Experience block
	createExperienceData(experienceOptions, '#experience');
	
	//Education
	educationOptions = {
		'education'	:	[
							{
								grade		:	'Grado Superior',
								specialism	:	'Desarrollo de aplicaciones inform&aacute;ticas',
								colleague	:	'I.E.S. Bajo Arag&oacute;n',
								city		:	'Alca&ntilde;iz',
								country		:	'Espa&ntilde;a',
								start		:	'2008',
								end			:	'2010'
							},{
								grade		:	'Bachillerato',
								specialism	:	'Tecnolog&iacute;a'	,
								colleague	:	'I.E.S. Bajo Arag&oacute;n',
								city		:	'Alca&ntilde;iz',
								country		:	'Espa&ntilde;a',
								start		:	'2005',
								end			:	'2008'
							},{
								grade		:	'E.S.O.',
								colleague	:	'I.E.S. Bajo Arag&oacute;n',
								city		:	'Alca&ntilde;iz',
								country		:	'Espa&ntilde;a',
								start		:	'2002',
								end			:	'2005'
							}
						]
	}
	
	//Create Education block
	createEducationData(educationOptions, '#education');
	
	//Hobbies
	hobbiesOptions = {
		'hobbies'	:	[
							{
								hobby	:	'Correr por el parque'
							},{
								hobby	:	'Ver series y pel&iacute;culas'
							},{
								hobby	:	'Jugar a videojuegos'
							},{
								hobby	:	'Ir en bicicleta por la ciudad'
							}
						]
	}
	
	//Create Hobbies block
	createHobbiesData(hobbiesOptions, '#hobbies');
	
	//Languages
	languagesOptions = {
		'languages'	:	[
							{
								title	:	'Castellano',
								speak	:	'Muy bien',
								write	:	'Muy bien',
								read	:	'Muy bien'
							},{
								title	:	'Rumano',
								speak	:	'Muy bien',
								write	:	'Muy bien',
								read	:	'Muy bien'
							},{
								title	:	'Ingl&eacute;s',
								speak	:	'Bien',
								write	:	'Bien',
								read	:	'Bien'
							}
						]
	}
	
	//Create Languages block
	createLanguagesData(languagesOptions, '#languages');
}
