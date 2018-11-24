   var bio = {
	"name": "Francisco Reyna",
	"role": "IT Specialist / Engineer",
	"contacts": {
		"mobile": "302-450-8694",
		"email": "josefreyna@gmail.com",
		"github": "FrankReyna",
		"twitter": "@EseFrankiie",
		"location": "Berkeley,CA"

	},
	{"welcomeMessage": "Modus ponens",
	"skills": [
		"Computer Networking", "Project Management", "Systems Designer"
	],
	"bioPic": "images/frank1.jpg",

    };

    //bio.display = function(){
    	//for (i in bio){
    		var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
    		$("#header").append(formattedHeaderName);
    		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    		$("#header").append(formattedRole);





    		var formattedMobile =HTMLmobile.replace("%data%", bio.contacts.mobile);
    		
    		//$("#header").append(formattedMobile);

    		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    		//$("#header").append(formattedEmail);
    		var formattedTwit = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    		var formattedGit= HTMLgithub.replace("%data%",bio.contacts.github)
    		var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
    		var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    		$("#header").append(formattedWelcome);
    		var formattedBiopic = HTMLbioPic.replace("%data%",bio.bioPic);
    		$("#header").append(formattedBiopic);
    		
    		var formattedContacts = formattedMobile + formattedEmail + formattedTwit + formattedGit + formattedlocation;
    		$("#topContacts").append(formattedContacts);
    		$("#footerContacts").prepend(formattedContacts);

    	//}
    //};

  	if(bio.skills.length > 0) {
  	$("#header").append(HTMLskillsStart);

  	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
  	  $("#skills").append(formattedSkill);
  	  
  	  formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
  	  $("#skills").append(formattedSkill);
  	  
  	  formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
  	  $("#skills").append(formattedSkill);

  	
  	};

  var education = {
	"schools": [
	    {
			"name": "Wilmington University",
			"location": " Dover, DE, US",
			"degree": "In School",
			"major": "Information Systems Management"
		}

	],

	"onlineCourses": [{
			"Math": "Mathematical Thinking",
			"school": "Stanford"
		},

		{
			"Computational Structures 1": "Digital Circuits",
			"Computational Structures 2": "Computer Architecture",
			"school": "MITx"
		},

		{
			"Neuroscience": "Computational Neuroscience",
			"school": "University of Washington"
		},

		{
			"Neuroscience": "Foundational Neuroscience",
			"school": "Duke University"
		},

		{
			"Algorithms": "Algorithms, Part 1",
			"school": "Princeton"
		},

		{
			"Computer Networks": "Networks",
			"school": "University of Washington"

		}
	]
};

   function displayEducation() {
   	for (i in education.schools) {
   		$("#education").append(HTMLschoolStart);

   		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
   		  $(".education-entry:last").append(formattedSchoolName);

   		  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
   		  $(".education-entry:last").append(formattedSchoolDegree);

   		  var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
   		  $(".education-entry:last").append(formattedMajor);

   		  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
   		  $(".education-entry:last").append(formattedSchoolLocation);


   	}
   };
   displayEducation();
   

   var work = {
   	"jobs" : [
   	 {
       "employer" : " Cummins LLC ",
       "title" : " Engine lSupervisor",
       "location" : " San leandro, CA",
       "dates" : " FEB 2016-Current",
       "description": " Manage Diesel engine technicians to diagnose and repair Diesel Engines. Determined warranty failures, quoted and managed projects. Consulted clients on most efficient and cost effective solutions. " 
     },
      {
       "employer" : "Careys Diesel", 
       "title" : "Operations Manager",
       "location" : " Leipsic, DE",
       "dates" :"2011 - August 15, 2015", 
       "description" : "Systems Admin- Network design and setup. Automated backups of critcal information to inhouse server and VMware images to Cloud.
       Developed emergency backup system to reduce downtime.
       Designed and published optimized Websites.
       Migrated data from legacy software to Quickbooks.
       Setup and maintained Quickbooks Enterprise.
       Setup IP security Cameras to inhouse system and Mobile.
       Developed several scripts to automate updates and security scans during non-business hours. Setup and updated Software applications for Technicians. Utilized and trained technicians how to use software and hardware."}
       ]
   };

function displayWork(){
  		for(job in work.jobs){
  		$("#workExperience").append(HTMLworkStart);

  		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  		var formattedEmployerTitle = formattedEmployer + formattedTitle;
  		        $(".work-entry:last").append(formattedEmployerTitle);
  		
  		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  		  		$(".work-entry:last").append(formattedWorkDates);
  		
  		var formatted_address1 = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  		  		$(".work-entry:last").append(formatted_address1);
  		
  		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  	  		    $(".work-entry:last").append(formattedWorkDescription);
  	 }
  	};

  	displayWork(); 

  	$("#mapDiv").append(googleMap);
    

  



  	






  
   