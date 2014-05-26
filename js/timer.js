var eTools = (function () {
	"use strict";

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
				[ "Squat punch", 30 ]]
		},
		{
			name: "Work",
			workout: [
				[ "Dips", 30 ],
				[ "One-legged squat", 30 ],
				[ "Dips", 30 ],
				[ "One-legged squat", 30 ]]
		}];

	// iterate through a workout, dsisplaying the name and the seconds
	var exerciseTimer = function (exercises) {
		$("#workouts").hide();
		
		var time = document.getElementById("time");
		var desc = document.getElementById("desc");
		
		var i = 0;
		var exercise = exercises.workout[i];
		var tt = setInterval(function () {
		
			desc.textContent = exercise[0];
			time.textContent = exercise[1];
			
			document.getElementById("time").textContent = exercise[1].toFixed(0);
			exercise[1] = exercise[1] - 1;
			
			if (exercise[1] <= 0) {
				i++;
				exercise = exercises.workout[i];
				if (i > exercises.workout.length - 1) {
					setTimeout(function (){
						clearInterval(tt);

						desc.textContent = "You're done!";
						time.textContent = "";	

						$("#workouts").show();
					}, 1000);
				}
			}
		}, 1000);	

		desc.textContent = exercise[0];
		time.textContent = exercise[1];
	};

	// display a table for each exercise
	var showExercise = function (exercises) {
		var child = [];

		for (var i = 0; i <= exercises.length - 1; i++) {
			
			var exercise = exercises[i];

			var l = child.push($("<table class='table'></table>")) - 1;  // "-1" at end to convert count into index
			child[l].attr("name", child.length-1);
			//child[l].attr("name", JSON.stringify(exercise));

			$("<thead><tr><th>Exercise</th><th>Time</th></tr></thead>").appendTo(child[l]);
			exercise.workout.forEach(function (e, i, a) {
				$("<tr><td>"+a[i][0]+"</td><td>"+a[i][1]+"</td></tr>").appendTo(child[l]);
			});
		}

		child.forEach(function (e, i, a) {
			var h = $("<div class='col-md-4'></div>").append(e);
			$("#workouts").append(h);
		});
	};

	return { showExercise : showExercise, exerciseTimer : exerciseTimer, exerciseArray : exerciseArray };

}());

$(document).ready(function (){
	"use strict";
	eTools.showExercise(eTools.exerciseArray);
	$("#workouts table").bind("click", function(e) {
		eTools.exerciseTimer(eTools.exerciseArray[e.currentTarget.attributes.name.value]);
	});
});