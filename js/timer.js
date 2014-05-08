function exerciseTimer(exercises) {
	
	var time = document.getElementById('time');
	var desc = document.getElementById('desc');
	
	var exercise = exercises.shift();
	desc.textContent = exercise[0];
	time.textContent = exercise[1];

	var tt = setInterval(function() {
	
		desc.textContent = exercise[0];
		time.textContent = exercise[1];
		
		document.getElementById('time').textContent = exercise[1].toFixed(0);
		exercise[1] = exercise[1] - 1;
		
		if (exercise[1] <= 0) { 
			exercise = exercises.shift();
			if (!exercise) {
				clearInterval(tt);

				desc.textContent = "You're done!";
				time.textContent = "";	
			}
		}
	}, 1000);	
}

function showExercise(exercises) {

}