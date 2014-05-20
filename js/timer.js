var eTools = (function() {

	// define the exercises
	var exerciseArray = [
		{
			name: "Evening",
			workout: [
				[ "Burpee", 30 ],
				[ "Squat punch", 30 ],
				[ "Pushup/Pullup", 30 ],
				[ "Squat punch", 30 ],
				[ "Rest", 60 ],
				[ "Burpee", 30 ],
				[ "Squat punch", 30 ],
				[ "Pushup/Pullup", 30 ],
				[ "Squat punch", 30 ]]},
		{
			name: "Work",
			workout: [
				[ "One-legged squat", 30 ],
				[ "Dips", 30 ]]}];

	// iterate through a workout, dsisplaying the name and the seconds
	var exerciseTimer = function(exercises) {
		
		var time = document.getElementById("time");
		var desc = document.getElementById("desc");
		
		var exercise = exercises.shift();
		desc.textContent = exercise[0];
		time.textContent = exercise[1];

		var tt = setInterval(function() {
		
			desc.textContent = exercise[0];
			time.textContent = exercise[1];
			
			document.getElementById("time").textContent = exercise[1].toFixed(0);
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

	// display a table for each exercise
	var showExercise = function(exercises) {
		var child = [];
		while(exercise = exercises.shift()) {
			l = child.push($("<table class='table'></table>")) - 1;  // "-1" at end to convert count into index
			child[l].attr("name", child.length-1);
			//child[l].attr("name", JSON.stringify(exercise));

			$("<thead><tr><th>Exercise</th><th>Time</th></tr></thead>").appendTo(child[l]);
			exercise.workout.forEach(function(e, i, a) {
				$("<tr><td>"+a[i][0]+"</td><td>"+a[i][1]+"</td></tr>").appendTo(child[l]);
			})
		}

		child.forEach(function(e, i, a) {
			var h = $("<div class='col-md-4'></div>").append(e);
			$("#workouts").append(h);
		})
	}

	return { showExercise : showExercise, exerciseTimer : exerciseTimer, exerciseArray : exerciseArray };

}());

jQuery(document).ready(function (){
	eTools.showExercise(eTools.exerciseArray);
	jQuery("#workouts table").bind("click", function(e) {
		eTools.exerciseTimer(eTools.exerciseArray[e.currentTarget.attributes.name.value]);
	});
});