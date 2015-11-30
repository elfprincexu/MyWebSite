// JavaScript Document

// JavaScript Document
        function setCookie(name, value, expires, path, domain, secure) {
            var curCookie = name + "=" + escape(value) + ((expires) ? "; expires=" + expires.toGMTString() : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "")
            if ((name + "=" + escape(value)).length <= 4000) document.cookie = curCookie
            else if (confirm("Cookie exceeds 4KB and will be cut!")) document.cookie = curCookie
        }

        function getCookie(name) {
            var prefix = name + "="
            var cookieStartIndex = document.cookie.indexOf(prefix)
            if (cookieStartIndex == -1) return null
            var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
            if (cookieEndIndex == -1) cookieEndIndex = document.cookie.length
            return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
        }

        function deleteCookie(name, path, domain) {
            if (getCookie(name)) {
                document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT"
            }
        }

        function fixDate(date) {
            var base = new Date(0)
            var skew = base.getTime()
            if (skew > 0) date.setTime(date.getTime() - skew)
        }
   
   


function loadTimes(){

    var now = new Date()
    fixDate(now)
    now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000)
    var visits = getCookie("counter")
    if (!visits) visits = 1
    else visits = parseInt(visits) + 1
    setCookie("counter", visits, now)

	visit_times.innerHTML="You are the "+ visits + "th visiter";
}

function loadCV(url){
	try{ 
	var elemIF = document.createElement("iframe");   
	elemIF.src = url;   
	elemIF.style.display = "none";   
	document.body.appendChild(elemIF);   
	}catch(e){ 
	} 	
}

function loadAbout(){
	var itemtitle = document.getElementById("itemtitle");
	itemtitle.innerHTML = "&nbsp;&nbsp;About Me";
	
	var itemtext = document.getElementById("itemtext");
	var text = "I am a student from department of Automation, <a href=http://www.seu.edu.cn/s/132/>Southeast University,China </a> and now continue my studies in the field of Computer Science at <a href= http://www.telecom-paristech.fr/nc/formation-et-innovation-dans-le-numerique.html>ENST</a>, Paris, France. I am interested about all new technologies in the filed of computer science. " + "<br /><br />" + "After six months of experiences as an intern at <a href=https://maps.google.fr/maps?safe=off&q=IBM+France+lab,+Gentilly&bav=on.2,or.r_cp.r_qf.&bvm=bv.45921128,d.d2k&biw=1366&bih=653&um=1&ie=UTF-8&hl=fr&sa=N&tab=wl&authuser=0>IBM France lab, Gentilly</a>, I am deeply impressed by its value and unique culture. I look forward to have the chance to start my career in such an enterprise. It gives my passion to the new technology; I learned a lot of knowledge from the six-month internship." +"<br /><br />" + " Having a basic and solid base of knowledge about Java,C/C++ in the field of User Interface, Android application development, DataBase and a basic knowledge about the graphical 3D , I look forward to continue my carrier in these corresponding fields.<br /><br /><br />" ;
	
	var download_cv = "Note* : For more details about me, you can download my <a href='file/CV_Junxian_Xu_Eng.pdf'> CV. </a> <br />"
	var email_contact = " Email :<b> nicolas.xu89@gmail.com </b> "
	
	itemtext.innerHTML =text + download_cv + email_contact;
}

function loadEdu(){
	var itemtitle = document.getElementById("itemtitle");
	itemtitle.innerHTML = "&nbsp;&nbsp;Education";
	var itemtext = document.getElementById("itemtext");
	var imgURL = "images/star.png";
	var img = "<img src='"+imgURL+"' >  </img>";
	/**
	Education
	09/2011-06/2012 École Nationale Supérieure des télécommunications(ENST), Paris, France, Engenieer degree
Specialty: Software development engineer
Major classes: web applications, graphical user interface, advanced data base, android development 

	09/2007-07/2011 Southeast University, Nanjing, China,  Bachelor degree:
Specialty: Automation and computer science, graduate - with honors 
Major classes: Theory of automation and classes of languages like Java, C++, UML, 

	**/
	
	var text = 
	img+ "<b>"+"09/2011-06/2012 École Nationale Supérieure des télécommunications (ENST), Paris, France, Engenieer degree</b>" + "<br />"
	+"&nbsp;&nbsp;Specialty: Software development engineer" +"<br/>"
	+"&nbsp;&nbsp;Major classes: web applications, graphical user interface, advanced data base, android development "+ "<br /><br /><br /><br />"
	
	+img+"<b>"+"09/2007-07/2011 Southeast University, Nanjing, China,  Bachelor degree</b>" + "<br />"
	+"&nbsp;&nbsp;Specialty: Automation and computer science, graduate - with honors " + "<br/>"
	+"&nbsp;&nbsp;Major classes: Theory of automation and classes of languages like Java, C++, UML" + "<br /><br />" ;
	itemtext.innerHTML = text;
	
}

function loadPx(){
	var itemtitle = document.getElementById("itemtitle");
	itemtitle.innerHTML = "&nbsp;&nbsp;Professional experiences";
	
	
	/*	07/2012 - 12/ 2012    IBM France Lab. (Gentilly, Paris), WODM Engineer
Subject: Performance tests and simulation of rule-decision executions
         - Construction of a distributed system (platform of Sysfera©, DIET®)
 - Implementation of a benchmark (WODM ®) on DIET.
         - Creation of the simulation of Rule-decision executions
     - Performance tests and simulation of WODM
         - Works very well, Final Score B+ (From A to G)  

	09/2011 - 12/2011  China post (Nanjing, China), Software developer
Subject: Android application development for the governance of postal vehicles.
    	 - Specifications modeling and design (UML).
		 - Implementation of source code (Eclipse, Java)
         	- Successful authentication of Google Drive account and Data Synchronization  
        	- Realization of flashing 2D code with phone camera
		 - Verification and Optimization of application  
		 - Creation of the manual.
	*/
	var itemtext = document.getElementById("itemtext");
	var imgURL = "images/star.png";
	var img = "<img src='"+imgURL+"' >  </img>";
	
	var text = 
	img +"<b>"+"	07/2012 - 12/ 2012    IBM France Lab. (Gentilly, Paris), WODM Engineer</b>" + "<br />"
	+"&nbsp;&nbsp;Subject:Performance tests and simulation of rule-decision executions" +"<br/>"
	+"&nbsp;&nbsp;&nbsp;&nbsp;-Construction of a distributed system (platform of Sysfera©, DIET®)"+ "<br />"
	+"&nbsp;&nbsp;&nbsp;&nbsp;-Implementation of a benchmark (WODM ®) on DIET."+ "<br />"
	+"&nbsp;&nbsp;&nbsp;&nbsp;-Creation of the simulation of Rule-decision executions"+ "<br />"
	+"&nbsp;&nbsp;&nbsp;&nbsp;-Performance tests and simulation of WODM"+ "<br />"
	+"&nbsp;&nbsp;&nbsp;&nbsp;-Works very well, Final Score B+ (From A to G)  "+ "<br /><br /><br /><br />"

	
	+img+"<b>"+"09/2011 - 12/2011  China post (Nanjing, China), Software developer</b>" + "<br />"
	+"&nbsp;&nbsp;Subject:Android application development for the governance of postal vehicles." +"<br/>"
	+"&nbsp;&nbsp;&nbsp;&nbsp;-Implementation of source code (Eclipse, Java)"+ "<br />"
	+"&nbsp;&nbsp;&nbsp;&nbsp;-Implementation of a benchmark (WODM ®) on DIET."+ "<br />"
	+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Successful authentication of Google Drive account and Data Synchronization"+ "<br />"
	+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Realization of flashing 2D code with phone camera"+ "<br />"
	+"&nbsp;&nbsp;&nbsp;&nbsp;-Verification and Optimization of application "+ "<br />"
	+"&nbsp;&nbsp;&nbsp;&nbsp;-Creation of the manual"+ "<br /><br />"

	itemtext.innerHTML = text;
	
	
	
}

function loadHonors(){
	var itemtitle = document.getElementById("itemtitle");
	itemtitle.innerHTML = "&nbsp;&nbsp;Honors and Awards";
	
	/*
	Apr/2011  National Prize Winner for oversea studies (50 engineers of national project), China
	Apr/2010  First prize of International Mathematical modeling competition (U.S.A)
	Oct/2010  Second prize of "Texas Instruments" electronic competition, Jiangsu, China
	Apr/2009  Excellet prize of "Southeast University" students(50 prize winners of 5000 students), Nanjing, China
*/
	var itemtext = document.getElementById("itemtext");
	var imgURL = "images/star.png";
	var img = "<img src='"+imgURL+"' >  </img>";
	var text = 
	img + "July/2011" +"<br/>" 
	+"<b>Excellent graduate of Southeast University, Nanjing, China</b></a><a href=file/Ranking_certification.pdf>(Certification_PDF)</a>" + "<br /><br />"
	+img +"Apr/2011" +"<br/>" 
	+"<b>National Prize for oversea studies (50 engineers of national project), China</b>" + "<br /><br />"
	+ img +"Apr/2010" +"<br/>"
	+"<b>First prize of International Mathematical modeling competition (U.S.A)</b>"+ "<a href=file/Attestation6312.pdf>(Certification_PDF)</a><a href=file/Summary_6312.pdf>(Summary_PDF)</a><a href=file/solution_6312.pdf>(Solution_PDF)</a>"  + "<br /><br />"
	
	+ img +"Oct/2010"+"<br/>"
	+"<b>Second prize of Texas Instruments electronic competition, Jiangsu, China</b>" + "<br /><br />"
	+ img + "Oct/2009<br/ >"
	+ "<b>First prize of Jiangsu Province district of  the High Education Cup National Mathematical Modeling Competition</b><a href=file/National_Modeling_XU_Junxian.pdf>(Certification_PDF)</a>" + "<br /><br />"
	+ img +"Apr/2009"+"<br/>"
	+"<b>President Scholarship of Southeast University students(50 prize winners of 5000 students), Nanjing, China</b><a href=file/President_Scholarship.pdf>(Certification_PDF)</a>" + "<br /><br />";
	itemtext.innerHTML = text;

}


function loadHobbies(){
	var itemtitle = document.getElementById("itemtitle");
	itemtitle.innerHTML = "&nbsp;&nbsp;Hobbies";
	
	var itemtext = document.getElementById("itemtext");
	var text = "Enthusiasm for basketball and good at playing badminton and table tennis<br/>";
	
	var imgURL = "images/basket.jpg";
	var img = "<div width='500px'><img src='"+imgURL+"' >  </img></div>";
	var imgURL2 = "images/voyage.jpg";
	var img2 = "<div width='500px'><img src='"+imgURL2+"' >  </img></div>";

    var imgTable = "<table> <tr> <td>" + img + "</td><td width='10px'></td><td>" + img2 +"</td></tr></table>" 
	 
	itemtext.innerHTML = text + imgTable;
	
	
}