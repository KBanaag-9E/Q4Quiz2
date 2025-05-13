// determines which subject to grade
function subjectGrade() {
	var subjectCategory = document.getElementById('subjectEntry').value;

		switch (subjectCategory) {
			case "sci":
				gradingSci();
				break;
			case "math":
				gradingM();
				break;
			case "ss":
				gradingSS();
				break;
			default:
				window.alert("Invalid Input");
		}
}

// determines the non-numerical grade of Science subject
function gradingSci() {
	var Sgrade = document.getElementById('subjectSci').value;
	
	if (Sgrade >= 94 && Sgrade <= 100) {
		document.getElementById('displaySci').innerHTML = 'Excellent';
	}
		else if (Sgrade >= 87 && Sgrade <= 93.99) {
			document.getElementById('displaySci').innerHTML = 'Above Standard';
		}
		else if (Sgrade >= 80 && Sgrade <= 86.99) {
			document.getElementById('displaySci').innerHTML = 'Standard';
		}
		else if (Sgrade >= 75 && Sgrade <= 79.99) {
			document.getElementById('displaySci').innerHTML = 'Needs Improvement';
		}
		else if (Sgrade >= 70 && Sgrade <= 74.99) {
			document.getElementById('displaySci').innerHTML = 'Poor';
		}
		else if (Sgrade <= 0) {
			document.getElementById('displaySci').innerHTML = 'Invalid Score';
		}
		else {
			document.getElementById('displaySci').innerHTML = 'Failed';
		}
}

// determines the non-numerical grade of Math subject
function gradingM() {
	var Mgrade = document.getElementById('subjectM').value;
	
	if (Mgrade >= 94 && Mgrade <= 100) {
		document.getElementById('displayM').innerHTML = 'Excellent';
	}
		else if (Mgrade >= 87 && Mgrade <= 93.99) {
			document.getElementById('displayM').innerHTML = 'Above Standard';
		}
		else if (Mgrade >= 80 && Mgrade <= 86.99) {
			document.getElementById('displayM').innerHTML = 'Standard';
		}
		else if (Mgrade >= 75 && Mgrade <= 79.99) {
			document.getElementById('displayM').innerHTML = 'Needs Improvement';
		}
		else if (Mgrade >= 70 && Mgrade <= 74.99) {
			document.getElementById('displayM').innerHTML = 'Poor';
		}
		else if (Mgrade <= 0) {
			document.getElementById('displayM').innerHTML = 'Invalid Score';
		}
		else {
			document.getElementById('displayM').innerHTML = 'Failed';
		}
}

// determines the non-numerical grade of Social Studies subject
function gradingSS() {
	var SSgrade = document.getElementById('subjectSS').value;
	
	if (SSgrade >= 94 && SSgrade <= 100) {
		document.getElementById('displaySS').innerHTML = 'Excellent';
	}
		else if (SSgrade >= 87 && SSgrade <= 93.99) {
			document.getElementById('displaySS').innerHTML = 'Above Standard';
		}
		else if (SSgrade >= 80 && SSgrade <= 86.99) {
			document.getElementById('displaySS').innerHTML = 'Standard';
		}
		else if (SSgrade >= 75 && SSgrade <= 79.99) {
			document.getElementById('displaySS').innerHTML = 'Needs Improvement';
		}
		else if (SSgrade >= 70 && SSgrade <= 74.99) {
			document.getElementById('displaySS').innerHTML = 'Poor';
		}
		else if (SSgrade <= 0) {
			document.getElementById('displaySS').innerHTML = 'Invalid Score';
		}
		else {
			document.getElementById('displaySS').innerHTML = 'Failed';
		}
}
