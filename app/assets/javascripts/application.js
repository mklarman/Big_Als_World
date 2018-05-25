// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .


var allClients = []
var fnames = ["Steve", "Jerry", "Bob", "Robert", "Billy", "Ted", "Tony", "Telly", "Tom", "Vic", "Vinny", "Von", "Van", "Frank", "Anthony", "Mike", "Chris", "Charles", "Dave", "Doug", "Del", "Donny", "Dan", "Ernie", "Earl", "Enis", "Greg", "Brian", "Ralph", "Lou", "Henry", "Hank", "Trevor", "Travis", "Rory", "Barry"]
var lnames = ["Miller", "Stankowitz", "Jones", "Shitstein", "O'Mally", "Fugly", "Termatasoz", "Dix", "Cox", "Cumstein", "Adams", "Washington", "Jefferson", "Madison", "Monroe", "Jackson", "Tunginbls", "Ballinmowf", "Lincoln", "Puke", "Banger"]
var stateNames = ["PA", "NY", "AL", "AK", "AR", "CA", "CO", "CT"] 
var bankroll1 = [500, 1000]
var bankroll2 = [1000, 3000]
var bankroll3 = [5000, 20000]
var betsFor1 = [25, 50]
var betsFor2 = [100, 150, 200, 250]
var betsFor3 = [300, 500, 1000, 2000]
var clientTypes = ["Small Timer", "Pay Dumper", "High Roller"]
var kinds = ["Sports Betting", "Lottery"]
var creditRating = ["No Pay", "Slow Pay", "Solid Pay", "Lock Pay"]
var affiliation = false



function randomBR(min,max){
    
    return Math.floor(Math.random()*(max-min+1)+min);
}

function Client(first, last, state, bankroll, bets, type, pref, risk, affiliation){

	this.firstName = first
	this.lastName = last
	this.state = state
	this.bankroll = bankroll
	this.bets = bets
	this.type = type
	this.pref = pref
	this.risk = risk
	this.affiliation = affiliation


}

function createClient(){

	var pickFname = fnames[Math.floor(Math.random() * fnames.length)];
	var pickLname = lnames[Math.floor(Math.random() * lnames.length)];
	var pickState = stateNames[Math.floor(Math.random() * stateNames.length)];
	var kindOfClient = clientTypes[Math.floor(Math.random() * clientTypes.length)];
	var clientPref = kinds[Math.floor(Math.random() * kinds.length)];
	var clientRat = creditRating[Math.floor(Math.random() * creditRating.length)];

	if(kindOfClient == "Small Timer"){

		var bankAmount = randomBR(bankroll1[0], bankroll1[1])
		var betAmounts = betsFor1
	
	}else if(kindOfClient == "Pay Dumper"){

		var bankAmount = randomBR(bankroll2[0], bankroll2[1])
		var betAmounts = betsFor2
	
	}else{

		var bankAmount = randomBR(bankroll3[0], bankroll3[1])
		var betAmounts = betsFor3
	}

	var nextClient = new Client(fnames[pickFname], lnames[pickLname], stateNames[pickState], bankAmount, betAmounts, clientTypes[kindOfClient], kinds[clientPref], creditRating[clientRat], false)

	allClients.push(nextClient)

}

function parlayCalc(spread1, spread2, spread3, amount){

	if(spread1 < 0){

		var parOdds1 = 100/Math.abs(spread1) + 1
	
	}else{

		var parOdds1 = spread1/100 + 1
	}

	if(spread2 < 0){

		var parOdds2 = 100/Math.abs(spread2) + 1
	
	}else{

		var parOdds2 = spread2/100 + 1
	}

	if(spread3 < 0){

		var parOdds3 = 100/Math.abs(spread1) + 1
	
	}else{

		var parOdds3 = spread3/100 + 1
	}

	var totalOdds = parOdds1 * parOdds2 * parOdds3

	var payout = amount * totalOdds

	return [totalOdds, amount, payout]
}

function gradeTeams(fav, dog, spread, favScore, dogScore){

	if(favScore - spread > dogScore){

		dog.straight = "loss"
		fav.straight = "win"
		fav.twoTeam = "win"
		fav.threeTeam = "win"
		fav.fiveTeam = "win"
	}else if(favScore - spread == dogScore){

		dog.straight = "push"
		fav.straight = "push"
		fav.twoTeam = "win"
		fav.threeTeam = "win"
		fav.fiveTeam = "win"
		dog.twoTeam = "win"
		dog.threeTeam = "win"
		dog.fiveTeam = "win"

	}else{

		dog.straight = "win"
		fav.straight = "loss"
		
		if(favScore - spread + 6 > dogScore){

			fav.twoTeam = "win"
			fav.fiveTeam = "win"
	

		}else if(favScore - spread + 6 == dogScore){

			fav.twoTeam = "push"
			fav.fiveTeam = "push"
		
		}else{

			fav.twoTeam = "loss"
			fav.fiveTeam = "loss"

		}

		if(favScore - spread + 10 > dogScore){

			fav.threeTeam = "win"
		
		}else if (favScore - spread + 10 == dogScore){

			fav.threeTeam = "push"
		
		}else{

			fav.threeTeam = "loss"
		}

		if(dogScore + spread + 6 > favScore){

			dog.twoTeam = "win"
			dog.fiveTeam = "win"
		
		}else if (dogScore + spread + 6 == favScore){

			dog.twoTeam = "push"
			dog.fiveTeam = "push"
		
		}else{

			dog.twoTeam = "loss"
			dog.fiveTeam = "loss"
		}

		if(dogScore + spread + 10 > favScore){

			dog.threeTeam = "win"
		
		}else if(dogScore + spread + 10 == favScore){

			dog.threeTeam = "push"
		
		}else{

			dog.threeTeam = "loss"
		}

	}

	return [fav, dog]

}


