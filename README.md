# CVSDirectory
## UNDER INITIAL DEVELOPMENT 

## Technical details
HTML5 + JQuery + Underscore + PHP Backend + MySQL Databbase



### Starting TODO List:
 - Change styles
 - Clear old data
 - Create a PHP Backend (In progress)
 - Create a database (In progress)
 - Create Forms for creating CVs
 - Create a unified way for reusing same main.js file for all the CVs stored in the database

#### Front End

 - Create Template! Awesome slider 
 
#### Backend 
 - Create Restfull Webservices with php for update / delete / add users and CVs.
 - Data Encrypt / Data Decrypt php


#### Inline edition of CVs:
  Users must autenticate, after that, when a user does a double click in  html elements with the class "editable" they change
  to edit mode. Prompting a button at the top of the page for sending the CV back to the server.
  
  $('.editable').bind('dblclick', function(){
    if($(this).hasClass('image')){
      //Image picker
    }else{
      $(this).html('<input type="text">Edit Me</input>');
    }
  });
 
### DONE List:
 - Add templating ( underscore maybe)

### IDEAS List:
 - An user can create more than one CV depending on his needs. (Maybe he can load one of the existing CV and modify it)
 - Add combos for professions and what we think it's important so we can translate them into other languages
 - Add more templates like "Others" and "Languages" (Also add photos and videos for designers)
 - Export CV to PDF and other formats (JasperReports maybe)
 - Add Reveal JS for creating Slide - Presentations http://lab.hakim.se/reveal-js/#/
 - OMG we MUST reuse something of that http://spyrestudios.com/30-new-open-source-plugins-scripts/
 - Add Douglas Crockford JSON js http://en.wikipedia.org/wiki/Douglas_Crockford
 - Add Continous Integration with Travis CI https://travis-ci.org/
 - Learn something from https://masterbranch.com/
 - Reuse Hakim experiments http://lab.hakim.se/
 
 

Special Thanks to : 
 - https://github.com/jpedroribeiro/html5-curriculum-vitae-template jpedroribeiro from who i copied first layout for quick start
 - predaandrei for contributing 
