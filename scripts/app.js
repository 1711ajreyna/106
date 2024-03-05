function saveTask(){
    console.log("saving..")
    //get the values
    const title = $("#inputTitle").val();
    const description = $("#inputDescription").val();
    const color = $("#inputColor").val();
    const date = $("#inputDate").val();
    const status = $("#inputStatus").val();
    const budget = $("#inputBudget").val();
    const minRange = $("#minRange").val();
    const maxRange = $("#maxRange").val();

    console.log(title,description,color,date,status,budget,minRange,maxRange)
    //build the object
    let newTask = new task(title,description,color,date,status,budget,minRange,maxRange)
    console.log(task)
    //save to server
    function testRequest(){
        $.ajax({
            type: "POST",
            url: "http://fsdiapi.azurewebsites.net/api/tasks/",
            data: JSON.stringify(task),
            contentType: "application/json",
            success: function(response){
                console.log(response);
            },
            error: function(error){
                console.log(error);
            }
        });
    }
    //display the task
	//concatenate task information
	const taskInfo = `<div class="task-info">
						<h2>${newTask.title}</h2>
						<p>Description: ${newTask.description}</p>
						<p>Color: <span style="background-color:${newTask.color};">${newTask.color}</span></p>
						<p>Date: ${newTask.date}</p>
						<p>Status: ${newTask.status}</p>
						<p>Min Range: ${newTask.minRange}</p>
						<p>Max Range: ${newTask.maxRange}</p>
					</div>`;
	// Append the task information to the list section
	$("#list").append(taskInfo);

	console.log("Task saved:", newTask);

}

//establish connection the server
function testRequest(){
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/",
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function init(){
    console.log("this is the task Manager");
    //load data

    //hook events
    $("#btnSave").click(saveTask);
    //document.getElementById("btnSave")
}
//when the page loads execute the init function
window.onload = init;


// Min and Max budget fields with slider
const rangevalue = 
	document.querySelector(".slider-container .price-slider"); 
const rangeInputvalue = 
	document.querySelectorAll(".range-input input"); 

// Set the price gap 
let priceGap = 500; 

// Adding event listners to price input elements 
/*const priceInputvalue = 
	document.querySelectorAll(".price-input input"); 
for (let i = 0; i < priceInputvalue.length; i++) { 
	priceInputvalue[i].addEventListener("input", e => { 

		// Parse min and max values of the range input 
		let minp = parseInt(priceInputvalue[0].value); 
		let maxp = parseInt(priceInputvalue[1].value); 
		let diff = maxp - minp 

		if (minp < 0) { 
			alert("minimum price cannot be less than 0"); 
			priceInputvalue[0].value = 0; 
			minp = 0; 
		} 

		// Validate the input values 
		if (maxp > 10000) { 
			alert("maximum price cannot be greater than 10000"); 
			priceInputvalue[1].value = 10000; 
			maxp = 10000; 
		} 

		if (minp > maxp - priceGap) { 
			priceInputvalue[0].value = maxp - priceGap; 
			minp = maxp - priceGap; 

			if (minp < 0) { 
				priceInputvalue[0].value = 0; 
				minp = 0; 
			} 
		} 

		// Check if the price gap is met 
		// and max price is within the range 
		if (diff >= priceGap && maxp <= rangeInputvalue[1].max) { 
			if (e.target.className === "min-input") { 
				rangeInputvalue[0].value = minp; 
				let value1 = rangeInputvalue[0].max; 
				rangevalue.style.left = `${(minp / value1) * 100}%`; 
			} 
			else { 
				rangeInputvalue[1].value = maxp; 
				let value2 = rangeInputvalue[1].max; 
				rangevalue.style.right = 
					`${100 - (maxp / value2) * 100}%`; 
			} 
		} 
	}); 

	// Add event listeners to range input elements 
	for (let i = 0; i < rangeInputvalue.length; i++) { 
		rangeInputvalue[i].addEventListener("input", e => { 
			let minVal = 
				parseInt(rangeInputvalue[0].value); 
			let maxVal = 
				parseInt(rangeInputvalue[1].value); 

			let diff = maxVal - minVal 
			
			// Check if the price gap is exceeded 
			if (diff < priceGap) { 
			
				// Check if the input is the min range input 
				if (e.target.className === "min-range") { 
					rangeInputvalue[0].value = maxVal - priceGap; 
				} 
				else { 
					rangeInputvalue[1].value = minVal + priceGap; 
				} 
			} 
			else { 
			
				// Update price inputs and range progress 
				priceInputvalue[0].value = minVal; 
				priceInputvalue[1].value = maxVal; 
				rangevalue.style.left = 
					`${(minVal / rangeInputvalue[0].max) * 100}%`; 
				rangevalue.style.right = 
					`${100 - (maxVal / rangeInputvalue[1].max) * 100}%`; 
			} 
		}); 
	} 
}*/

// Adding event listeners to price input elements 
for (let i = 0; i < rangeInputvalue.length; i++) {
    rangeInputvalue[i].addEventListener("input", e => {
        let minVal = parseInt(rangeInputvalue[0].value);
        let maxVal = parseInt(rangeInputvalue[1].value);

        // Update the slider position
        updateSlider(minVal, maxVal);
    });
}

// Update the slider position based on input values
function updateSlider(minVal, maxVal) {
    rangeInputvalue[0].value = minVal;
    rangeInputvalue[1].value = maxVal;

    let value1 = rangeInputvalue[0].max;
    let value2 = rangeInputvalue[1].max;

    rangevalue.style.left = `${(minVal / value1) * 100}%`;
    rangevalue.style.right = `${100 - (maxVal / value2) * 100}%`;
}

// Add event listeners to range input elements 
rangevalue.addEventListener("input", e => {
    let minVal = parseInt(rangeInputvalue[0].value);
    let maxVal = parseInt(rangeInputvalue[1].value);

    // Update the input values
    rangeInputvalue[0].value = minVal;
    rangeInputvalue[1].value = maxVal;
});


