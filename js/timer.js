function exerciseTimer(exercises) {
	
	var time = document.getElementById('time');
	var desc = document.getElementById('desc');
	
	var exercise = exercises.shift();
	desc.textContent = exercise.desc;
	time.textContent = exercise.countdown;

	var tt = setInterval(function() {
	
		desc.textContent = exercise.desc;
		time.textContent = exercise.countdown;
		
		document.getElementById('time').textContent = exercise.countdown.toFixed(0);
		exercise.countdown = exercise.countdown - 1;
		
		if (exercise.countdown <= 0) { 
			exercise = exercises.shift();
			if (!exercise) {
				clearInterval(tt);

				desc.textContent = "You're done!";
				time.textContent = "";	
			}
		}
	}, 1000);	
}