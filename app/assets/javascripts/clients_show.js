

	var submitWager = document.getElementsByClassName("new_wager")
	var submitWager2 = document.getElementById("new_wager")
	var submitButton = document.getElementById("submitButton")

	console.log(submitWager.length)

	submitButton.addEventListener("click", function(){

		submitForms()


	})

	function submitForms (){

		for(i=0; i<submitWager.length; i++){


			submitWager[i].submit()


		


		}
	}

	

	// submitButton.addEventListener("click", function(){

	// 	submitWager[0].submit()
	// 	// submitWager[1].submit()
	// 	// submitWager[2].submit()


	// })








