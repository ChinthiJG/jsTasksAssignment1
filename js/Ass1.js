function myFunction() {
	var recipientNameVar = document.getElementById('recipientName1').value;
	var organizationNameVar = document.getElementById('organizationName1').value;
	var eventDateVar = document.getElementById('eventDate1').value;
	var websiteURLVar = document.getElementById('websiteURL1').value;
	var hostNameVar = document.getElementById('hostName1').value;
	
	document.getElementById('recipientName').innerHTML = recipientNameVar;
	document.getElementById('organizationName').innerHTML = organizationNameVar;
	document.getElementById('eventDate').innerHTML = eventDateVar;
	document.getElementById('websiteURL').innerHTML = websiteURLVar;
	document.getElementById('hostName').innerHTML = hostNameVar;
	return false;
}