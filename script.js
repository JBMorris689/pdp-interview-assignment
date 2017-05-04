function getIncomeAnswer(){
	function checkUserIncomeAnswer(evt){
		var userGrossIncomeAnswer = document.getElementById('gross-monthly-income').value;
		var incomeSubmit = document.getElementById('income-submit');
		
		var IncomeTextAnswer = document.getElementById('income-text-answer');

		if(userGrossIncomeAnswer == 3035){
			alert('Correct!');
		}else{
			alert('See the correct answer below');
		}
		
		//displays correct answer
		IncomeTextAnswer.style.visibility = "visible";
		
		//disabled submit button after first click
		incomeSubmit.disabled = true;
		
		//prevent form submit
		evt.preventDefault();
	}
	document.getElementById('income-submit').addEventListener('click', checkUserIncomeAnswer);
}

function getEligibilyAnswer(){
	function checkUserEligibilityAnswer(evt){
		var income = document.getElementById('income');
		var familySize = document.getElementById('family_size');
		var livingArrangement = document.getElementById('living_arrangement');
		var averageAge = document.getElementById('average_age');
		var typeofHeat = document.getElementById('type_of_heat');
		var region = document.getElementById('region');
		
		var eligibilitySubmit = document.getElementById('eligibility-submit');
	
		var eligibilityTextAnswer = document.getElementById('eligibility-answer');
	
		if(income.checked == true && familySize.checked == true && livingArrangement.checked == true && averageAge.checked == true && typeofHeat.checked == false && region.checked == false){
			alert("Correct!!")
		}else if(typeofHeat.checked == true || region.checked == true){
			alert('The type of heat and region have no bearing on a family\'s eligibility.')
		}else if(eligibility.checked == true){
			alert('Nice try');
		}
		else{
			alert('See the correct answer below');
		}
	
		//displays correct answer
		eligibilityTextAnswer.style.visibility = "visible";
	
		//disabled submit button after first click
		eligibilitySubmit.disabled = true;
	
		//prevent form submit
		evt.preventDefault();
	}
	document.getElementById('eligibility-submit').addEventListener('click', checkUserEligibilityAnswer);
}

//function toggleMobileMenu(){
	var hamburgerMenu = document.getElementById('mobile-menu-hamburger');
	var hamburgerSubMenu = document.getElementById('mobile-menu-hide');
	
	hamburgerMenu.addEventListener('click', function(){
		if(hamburgerSubMenu.style.display == "none" || hamburgerSubMenu.style.display == ""){
			hamburgerSubMenu.style.display = "block";
		}else{
			hamburgerSubMenu.style.display = "none";
		}
	});
//}