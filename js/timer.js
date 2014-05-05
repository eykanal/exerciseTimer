function exerciseTimer(exerciseArray) {
	
	var countdownSpot = document.getElementById("countdown");
	var descSpot = document.getElementById("desc");
	var i = 0;
	
	var exerciseObject = exerciseArray[i];
	descSpot.textContent = exerciseObject.desc;
	countdownSpot.textContent = exerciseObject.countdown;

	var tt = setInterval(function() {
	
		var exerciseObject = exerciseArray[i];
	
		descSpot.textContent = exerciseObject.desc;
		countdownSpot.textContent = exerciseObject.countdown;
		
		document.getElementById('countdown').textContent = exerciseObject.countdown.toFixed(1);
		exerciseObject.countdown = exerciseObject.countdown - 0.1;
		
		if (exerciseObject.countdown <= 0) { 
			if(i < (exerciseArray.length - 1)) {
				i++;
			} else {
				clearInterval(tt);

				descSpot.textContent = "You're done!";
				countdownSpot.textContent = "";	
			}
		}
	}, 100);
	
}