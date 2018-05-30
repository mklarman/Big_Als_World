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
var nbaBettingOpt = []
var nbaTotalsOpt = []
var wagers = []
var betStyles = ["Small Timer", "Pay Dumper", "High Roller"]
var clientOpp = []



function ClientObj(){

	this.firstName = fnames[Math.floor(Math.random() * fnames.length)]
	this.lastName = lnames[Math.floor(Math.random() * lnames.length)]
	this.state = stateNames[Math.floor(Math.random() * stateNames.length)]
	this.stakes = clientTypes[Math.floor(Math.random() * clientTypes.length)]
	this.betOptions = ["Sports"]
	this.betStyle = betStyles[Math.floor(Math.random() * betStyles.length)]
	this.sportsBets = []

	if(this.stakes == "Small Timer"){

		this.betAmounts = betsFor1
	
	}else if(this.stakes == "Pay Dumper"){

		this.betAmounts = betsFor2
	
	}else{

		this.betAmounts = betsFor3
	}

	if(this.stakes == clientTypes[0]){

		this.bankroll = randomBR(bankroll1[0], bankroll1[1])
	
	}else if(this.stakes == clientTypes[1]){

		this.bankroll = randomBR(bankroll2[0], bankroll2[1])
	
	}else{

		this.bankroll = randomBR(bankroll3[0], bankroll3[1])
	}

	if(this.betStyle == betStyles[0]){

		this.possWager = ["straight"]
	
	}else if(this.betStyle == betStyles[1]){

		this.possWager = ["straight", "2 team parlay", "straight", "straight", "3 team parlay", "straight", "straight", "straight"]
	
	}else if(this.betStyle == betStyles[2]){

		this.possWager = ["straight", "2 team parlay", "straight", "3 team parlay", "straight", "4 team parlay", "straight", "5 team parlay", "straight", "2 team teaser", "straight", "3 team teaser", "straight", "4 team teaser", "straight", "5 team teaser", "straight", "2 team reverse", "straight", "3 team reverse", "straight", "4 team reverse", "straight"]
	
	}else{

		this.possWager = ["2 team parlay", "3 team parlay", "4 team parlay", "5 team parlay", "2 team teaser", "3 team teaser", "4 team teaser", "5 team teaser", "2 team reverse", "3 team reverse", "4 team reverse"]
	}


	this.genWager = function(){

		var newWager = {}


		newWager.category = this.betOptions[Math.floor(Math.random() * this.betOptions.length)]
		newWager.type = this.possWager[Math.floor(Math.random() * this.possWager.length)]
		newWager.amount = this.betAmounts[Math.floor(Math.random() * this.betAmounts.length)]
		newWager.teams = []			
		

		if(newWager.type == "straight"){

				
			var pick = clientOpp[Math.floor(Math.random() * clientOpp.length)]

			newWager.teams.push(pick)
				
		}else if(newWager.type == "2 team parlay" || newWager.type == "2 team teaser" || newWager.type == "2 team reverse"){

			var exoticWager = []

			pick1 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]

			exoticWager.push(pick1)
			exoticWager.push(pick2)
			newWager.teams.push(exoticWager)
				
		}else if(newWager.type == "3 team parlay" || newWager.type == "3 team teaser" || newWager.type == "3 team reverse"){

			var exoticWager = []
			
			pick1 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick3 = clientOpp[Math.floor(Math.random() * clientOpp.length)]


			exoticWager.push(pick1)
			exoticWager.push(pick2)
			exoticWager.push(pick3)
			newWager.teams.push(exoticWager)
				
		}else if(newWager.type == "4 team parlay" || newWager.type == "4 team teaser" || newWager.type == "4 team reverse"){

			var exoticWager = []
			
			pick1 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick3 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick4 = clientOpp[Math.floor(Math.random() * clientOpp.length)]

			exoticWager.push(pick1)
			exoticWager.push(pick2)
			exoticWager.push(pick3)
			exoticWager.push(pick4)
			newWager.teams.push(exoticWager)
		
		}else{

			var exoticWager = []
			
			pick1 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick2 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick3 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick4 = clientOpp[Math.floor(Math.random() * clientOpp.length)]
			pick5 = clientOpp[Math.floor(Math.random() * clientOpp.length)]


			exoticWager.push(pick1)
			exoticWager.push(pick2)
			exoticWager.push(pick3)
			exoticWager.push(pick4)
			exoticWager.push(pick5)
			newWager.teams.push(exoticWager)
		}

		this.sportsBets.push(newWager)

	}
}


	// this.gradeWagers = function(){

	// 	var winnerCircle = []
	// 	var losers = []
	// 	var pushes = []
	// 	var twoTWins = []
	// 	var twoTLoss = []
	// 	var threeTWin = []
	// 	var threeTLoss = []
	// 	var fiveTWin = []
	// 	var fiveTLoss = []

	// 	for(i=0; i<this.sportsBets.length; i++){

	// 		for(z=0; z<this.sportsBets[i].teams.length; z++){

	// 			for(x=0; x<this.sportsBets[i].teams[z].length; x++){

	// 				if(this.sportsBets[i].teams[z][x].spreadResult == "win"){

	// 					winnerCircle.push(this.sportsBets[i].teams[z][x])
					
	// 				}else if (this.sportsBets[i].teams[z][x].spreadResult == "loss"){

	// 					losers.push(this.sportsBets[i].teams[z][x])
					
	// 				}else{

	// 					pushes.push(this.sportsBets[i].teams[z][x])
	// 				}

	// 				if(this.sportsBets[i].teams[z][x].twoTResult == "win"){

	// 					twoTWins.push(this.sportsBets[i].teams[z][x])
					
	// 				}else{

	// 					twoTLoss.push(this.sportsBets[i].teams[z][x])

	// 				}

	// 				if(this.sportsBets[i].teams[z][x].threeTResult == "win"){

	// 					threeTWin.push(this.sportsBets[i].teams[z][x])
					
	// 				}else{

	// 					threeTLoss.push(this.sportsBets[i].teams[z][x])
	// 				}

	// 				if(this.sportsBets[i].teams[z][x].fiveTResult == "win"){

	// 					fiveTWin.push(this.sportsBets[i].teams[z][x])
					
	// 				}else{

	// 					fiveTLoss.push(this.sportsBets[i].teams[z][x])
	// 				}
	// 			}
	// 		}
			

	// 	}

	// }

	// this.gradeWagers = function(){

		

	// 	for(i=0; i<this.sportsBets.length; i++){

	// 		for(z=0; z<this.sportsBets[i].teams.length; z++){

	// 			for(x=0; x<this.sportsBets[i].teams[z].length; x++){

	// 				if(this.sportsBets[i].teams[z][x].spreadResult == "win"){

	// 					winnerCircle.push(this.sportsBets[i].teams[z][x])

	// 				}else if (this.sportsBets[i].teams[z][x].spreadResult == "loss"){

	// 					losers.push(this.sportsBets[i].teams[z][x])
					
	// 				}else{

	// 					pushes.push(this.sportsBets[i].teams[z][x])

	// 				}

	// 				if(this.sportsBets[i].teams[z][x].twoTResult == "win"){

	// 					twoTWins.push(this.sportsBets[i].teams[z][x])

	// 				}else{

	// 					twoTLoss.push(this.sportsBets[i].teams[z][x])
	// 				}

	// 				if(this.sportsBets[i].teams[z][x].threeTResult == "win"){

	// 					threeTWin.push(this.sportsBets[i].teams[z][x])
					
	// 				}else{

	// 					threeTLoss.push(this.sportsBets[i].teams[z][x])
	// 				}

	// 				if(this.sportsBets[i].teams[z][x].fiveTResult == "win"){

	// 					fiveTWin.push(this.sportsBets[i].teams[z][x])
					
	// 				}else{

	// 					fiveTLoss.push(this.sportsBets[i].teams[z][x])

	// 				}


	// 			}
	// 		}

	// 		if(this.sportsBets[i].type = "straight"){

	// 			if(winnerCircle.length == 1 && losers.length == 0){

	// 				this.bankroll += this.sportsBets[i].amount
				
	// 			}else if(winnerCircle.length == 0 && pushes.length == 1){

	// 				this.bankroll = this.bankroll
				
	// 			}else{

	// 				var creditAmount = this.sportsBets[i].amount * 1.1

	// 				this.bankroll -= creditAmount
	// 			}
			
	// 		}else if(this.sportsBets[i].type = "2 team parlay"){

	// 			if(losers.length > 0){

	// 				this.bankroll -= this.sportsBets[i].amount
				
	// 			}else if(losers.length == 0 && pushes.length == 1 && winnerCircle.length == 1){

	// 				this.bankroll += this.sportsBets[i].amount

	// 			}else{

	// 				var creditAmount = this.sportsBets[i].amount * 2.5
	// 				this.bankroll += creditAmount
	// 			}

	// 		}else if(this.sportsBets[i].type = "3 team parlay"){

	// 			if(losers.length > 0){

	// 				this.bankroll -= this.sportsBets[i].amount

	// 			}else{

	// 				if(losers.length == 0){

	// 					if(winnerCircle.length == 1){

	// 						this.bankroll += this.sportsBets[i].amount

	// 					}else if(winnerCircle.length == 2){

	// 						var creditAmount = this.sportsBets[i].amount * 2.5
	// 						this.bankroll += creditAmount

	// 					}else{

	// 						var creditAmount = this.sportsBets[i].amount * 5
	// 						this.bankroll += creditAmount

	// 					}

	// 				}
	// 			}
			
	// 		}else if(this.sportsBets[i].type = "4 team parlay"){

	// 			if(losers.length > 0){

	// 				this.bankroll -= this.sportsBets[i].amount

	// 			}else{

	// 				if(losers.length == 0){

	// 					if(winnerCircle.length == 1){

	// 						this.bankroll += this.sportsBets[i].amount

	// 					}else if(winnerCircle.length == 2){

	// 						var creditAmount = this.sportsBets[i].amount * 2.5
	// 						this.bankroll += creditAmount

	// 					}else if(winnerCircle.length == 3){

	// 						var creditAmount = this.sportsBets[i].amount * 5
	// 						this.bankroll += creditAmount

	// 					}else{

	// 						var creditAmount = this.sportsBets[i].amount * 10
	// 						this.bankroll += creditAmount

	// 					}

	// 				}

	// 			}

	// 		}else if(this.sportsBets[i].type = "5 team parlay"){

	// 			if(losers.length > 0){

	// 				this.bankroll -= this.sportsBets[i].amount

	// 			}else{

	// 				if(losers.length == 0){

	// 					if(winnerCircle.length == 1){

	// 						this.bankroll += this.sportsBets[i].amount

	// 					}else if(winnerCircle.length == 2){

	// 						var creditAmount = this.sportsBets[i].amount * 2.5
	// 						this.bankroll += creditAmount

	// 					}else if(winnerCircle.length == 3){

	// 						var creditAmount = this.sportsBets[i].amount * 5
	// 						this.bankroll += creditAmount

	// 					}else if(winnerCircle.length == 4){

	// 						var creditAmount = this.sportsBets[i].amount * 10
	// 						this.bankroll += creditAmount

	// 					}else{

	// 						var creditAmount = this.sportsBets[i].amount * 20
	// 						this.bankroll += creditAmount

	// 					}

	// 				}

	// 			}

	// 		}else if(this.sportsBets[i].type = "2 team reverse"){

	// 			if(losers.length == 2){

	// 				var creditAmount = this.sportsBets[i].amount * 2.2
	// 				this.bankroll -= creditAmount

	// 			}else if(losers.length == 1 && pushes.length == 1){

	// 				var creditAmount = this.sportsBets[i].amount * 1.1
	// 				this.bankroll -= creditAmount
				
	// 			}else if (winnerCircle.length == 1 && pushes.length ==1){

	// 				this.bankroll += this.sportsBets[i].amount
				
	// 			}else if(pushes.length == 2){

	// 				this.bankroll = this.bankroll

	// 			}else{

	// 				var creditAmount = this.sportsBets[i].amount * 4
	// 				this.bankroll += creditAmount

	// 			}
			
	// 		}else if(this.sportsBets[i].type = "3 team reverse"){

	// 			if(losers.length == 3){

	// 				var creditAmount = this.sportsBets[i].amount * 6.6
	// 				this.bankroll -= creditAmount
				
	// 			}else if(losers.length == 2 && pushes.length == 1){

	// 				var creditAmount = this.sportsBets[i].amount * 4.4
	// 				this.bankroll -= creditAmount
				
	// 			}else if(losers.length == 1 && pushes.length == 2){

	// 				this.bankroll -= this.sportsBets[i].amount
				
	// 			}else if(pushes.length == 3){

	// 				this.bankroll = this.bankroll
				
	// 			}else if (losers.length == 2 && winnerCircle.length == 1){

	// 				var creditAmount = this.sportsBets[i].amount * 3.4
	// 				this.bankroll -= creditAmount
				
	// 			}else if(losers.length == 1 && winnerCircle.length == 1 && pushes.length == 1){

	// 				var creditAmount = this.sportsBets[i].amount * 1.3
	// 				this.bankroll -= creditAmount

	// 			}else if(losers.length == 1 && winnerCircle.length == 2){

	// 				var creditAmount = this.sportsBets[i].amount * 1.6
	// 				this.bankroll += creditAmount
				
	// 			}else{

	// 				creditAmount = this.sportsBets[i].amount * 12
	// 				this.bankroll += creditAmount
	// 			}

	// 		}else if(this.sportsBets[i].type = "4 team reverse"){

	// 			if(losers.length == 4){

	// 				var creditAmount = this.sportsBets[i].amount * 13.2
	// 				this.bankroll -= creditAmount
				
	// 			}else if(losers.length == 3 && pushes.length == 1){

	// 				var creditAmount = this.sportsBets[1].amount * 9.9
	// 				this.bankroll -= creditAmount
				
	// 			}else if(losers.length == 2 && pushes.length == 2){

	// 				var creditAmount = this.sportsBets[i].amount * 6.6
	// 				this.bankroll -= creditAmount
				
	// 			}else if(losers.length == 1 && pushes.length == 3){

	// 				var creditAmount = this.sportsBets[i].amount * 3.3
	// 				this.bankroll -= creditAmount

	// 			}else if(pushes.length == 4){

	// 				this.bankroll = this.bankroll
				
	// 			}else if(losers.length == 2 && winnerCircle.length == 1 && pushes.length == 1){

	// 				var creditAmount = this.sportsBets[i].amount * 3.8
	// 				this.bankroll -= creditAmount

	// 			}else if(losers.length == 1 && winnerCircle.length == 1 && pushes.length == 2){

	// 				var creditAmount = this.sportsBets[i].amount * 1.4
	// 				this.bankroll -= creditAmount

	// 			}else if(losers.length == 1 && winnerCircle.length == 2 && pushes.length == 1){

	// 				var creditAmount = this.sportsBets[i].amount * 2.5
	// 				this.bankroll += creditAmount

	// 			}else if(winnerCircle.length == 1 && pushes.length == 3){

	// 				var creditAmount = this.sportsBets[i].amount * 3
	// 				this.bankroll += creditAmount
				
	// 			}else if(winnerCircle.length == 2 && pushes.length == 2){

	// 				var creditAmount = this.sportsBets[i].amount * 8
	// 				this.bankroll += creditAmount
				
	// 			}else if(winnerCircle.length == 3 && pushes.amount == 1){

	// 				var creditAmount = this.sportsBets[i].amount * 15
	// 				this.bankroll += creditAmount

	// 			}else{

	// 				var creditAmount = this.sportsBets[i].amount * 24
	// 				this.bankroll += creditAmount
	// 			}

	// 		}else if(this.sportsBets[i].type = "2 team teaser"){

	// 			if(twoTLoss.length > 0){

	// 				var creditAmount = this.sportsBets[i].amount * 1.2
	// 				this.bankroll -= creditAmount
				
	// 			}else{

	// 				var creditAmount = this.sportsBets[i].amount
	// 				this.bankroll += creditAmount
	// 			}

	// 		}else if(this.sportsBets[i].type = "3 team teaser"){

	// 			if(threeTLoss.length > 0){

	// 				var creditAmount = this.sportsBets[i].amount * 1.4
	// 				this.bankroll -= creditAmount
				
	// 			}else{

	// 				var creditAmount = this.sportsBets[i].amount
	// 				this.bankroll += creditAmount

	// 			}

	// 		}else{

	// 			if(fiveTLoss.length > 0){

	// 				var creditAmount = this.sportsBets[i].amount * 1.1
	// 				this.bankroll -= creditAmount

	// 			}else{

	// 				var creditAmount = this.sportsBets[i].amount * 5
	// 				this.bankroll += creditAmount

	// 			}
	// 	}
  





function pickATeam(matchup){

	var ranNum = randomBR(1, 2)

	if(ranNum == 1){

		return matchup.favorite
	
	}else{

		return matchup.underdog
	}
}

function randomBR(min,max){
    
    return Math.floor(Math.random()*(max-min+1)+min);
}


function parlayCalc2(spread1, spread2, amount){

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

	var totalOdds = parOdds1 * parOdds2

	var payout = amount * totalOdds

	return [totalOdds, amount, payout]

}

function parlayCalc3(spread1, spread2, spread3, amount){

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

		var parOdds3 = 100/Math.abs(spread3) + 1
	
	}else{

		var parOdds3 = spread3/100 + 1
	}

	var totalOdds = parOdds1 * parOdds2 * parOdds3

	var payout = amount * totalOdds

	return [totalOdds, amount, payout]
}

function parlayCalc4(spread1, spread2, spread3, spread4, amount){

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

		var parOdds3 = 100/Math.abs(spread3) + 1
	
	}else{

		var parOdds3 = spread3/100 + 1
	}

	if(spread4 < 0){

		var parOdds4 = 100/Math.abs(spread4) + 1
	
	}else{

		var parOdds4 = spread4/100 + 1
	}

	var totalOdds = parOdds1 * parOdds2 * parOdds3 * parOdds4

	var payout = amount * totalOdds

	return [totalOdds, amount, payout]
}

function parlayCalc5(spread1, spread2, spread3, spread4, spread5, amount){

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

		var parOdds3 = 100/Math.abs(spread3) + 1
	
	}else{

		var parOdds3 = spread3/100 + 1
	}

	if(spread4 < 0){

		var parOdds4 = 100/Math.abs(spread4) + 1
	
	}else{

		var parOdds4 = spread4/100 + 1
	}

	if(spread5 < 0){

		var parOdds5 = 100/Math.abs(spread5) + 1
	
	}else{

		var parOdds5 = spread5/100 + 1
	}


	var totalOdds = parOdds1 * parOdds2 * parOdds3 * parOdds4 * parOdds5

	var payout = amount * totalOdds

	return [totalOdds, amount, payout]
}


function createSpreadMatchup(sport, fav, dog, spread, totalLine){


	fav.opp = dog
	fav.spread = 0 - spread
	dog.opp = fav
	dog.spread = "+" + spread
	fav.total = totalLine 
	dog.total = totalLine 

	var gameMatchup = {

		favorite: fav.teamName + " " + fav.spread,
		underdog: dog.teamName + " " + dog.spread,
	}

	var totalsMatchup = {

		overs: "Over " + fav.teamName + " " + totalLine,
		unders: "Under " + dog.teamName + " " + totalLine	


	}

	if(sport == "NBA"){

		nbaBettingOpt.push(gameMatchup)
		nbaTotalsOpt.push(totalsMatchup)
	}

}

function clientPicks(){

	for(i=0; i<nbaBettingOpt.length; i++){

		let x = randomBR(1, 2)

		if(x == 1){

			clientOpp.push(nbaBettingOpt[i].favorite)

		}else{

			clientOpp.push(nbaBettingOpt[i].underdog)
		}
	}

	for(i=0; i<nbaTotalsOpt.length; i++){

		let y = randomBR(1, 2)

		if(y == 1){

			clientOpp.push(nbaTotalsOpt[i].overs)

		}else{

			clientOpp.push(nbaTotalsOpt[i].unders)
		}

	}
}

function setMatchups(){

	createSpreadMatchup("NBA", Celtics, Hawks, 5, 200)
	createSpreadMatchup("NBA", Sixers, Knicks, 2, 189)
	createSpreadMatchup("NBA", Jazz, Raptors, 9, 212)
	createSpreadMatchup("NBA", Hornets, Nets, 4.5, 199.5)
	createSpreadMatchup("NBA", Nuggets, Heat, 1, 205)
}

var Celtics = new SpreadTeam("Celtics", "Boston", "NBA")
var Hawks = new SpreadTeam("Hawks", "Atlanta", "NBA")
var Sixers = new SpreadTeam("76ers", "Philly", "NBA")
var Knicks = new SpreadTeam("Knicks", "New York", "NBA")
var Jazz = new SpreadTeam("Jazz", "Utah", "NBA")
var Raptors = new SpreadTeam("Raptors", "Toronto", "NBA")
var Hornets = new SpreadTeam("Hornets", "Charlotte", "NBA")
var Nets = new SpreadTeam("Nets", "Brooklyn", "NBA")
var Nuggets = new SpreadTeam("Nuggets", "Denver", "NBA")
var Heat = new SpreadTeam("Heat", "Miami", "NBA")




function SpreadTeam (teamName, city, sport){
	
	this.teamName = teamName
	this.city = city
	this.sport = sport
	this.startTime = 0
	this.opp = "none"
	this.spread = 0
	
	this.score = 0
	this.oppScore = 0
	
	if(this.sport == "NFL" || this.sport == "CFB"){

		this.twoTeamTeaser = function(){

			x = this.spread + 6.5
			return x
		}
		this.threeTeamTeaser = function(){

			x = this.spread + 9.5
			return x

		}
		this.fiveTeamTeaser = function(){

			x = this.spread + 6.5
			return x
		}
	
	}else{

		this.twoTeamTeaser = function(){

			x = this.spread + 4.5
			return x
		}
		this.threeTeamTeaser = function(){

			x = this.spread + 6.5
			return x

		}
		this.fiveTeamTeaser = function(){

			x = this.spread + 4.5
			return x
		}
	}
	
	this.gradeGame = function(){

		if(this.score + this.spread > this.oppScore){

			this.spreadResult = "win"
		
		}else if (this.score + this.spread < this.oppScore){

			this.spreadResult = "loss"
		
		}else{

			this.spreadResult = "push"
		}

		if(this.score + this.twoTeamTeaser() > this.oppScore){

			this.twoTResult = "win"
		
		}else if(this.score + this.twoTeamTeaser() < this.oppScore){

			this.twoTResult = "loss"
		
		}else{

			this.twoTResult = "push"
		}

		if(this.score + this.threeTeamTeaser() > this.oppScore){

			this.threeTResult = "win"
		
		}else if(this.score + this.twoTeamTeaser() < this.oppScore){

			this.threeTResult = "loss"
		
		}else{

			this.threeTResult = "push"
		}

		if(this.score + this.fiveTeamTeaser() > this.oppScore){

			this.fiveTResult = "win"
		
		}else if(this.score + this.fiveTeamTeaser() < this.oppScore){

			this.fiveTResult = "loss"
		
		}else{

			this.fiveTResult = "push"
		}

	}

	this.total = 0
	this.pointsScored = function(){

		var totalPoints = this.score + this.oppScore

		return totalPoints
	}

	this.totalResult = function(){

		if(this.pointsScored > this.total){

			var tResult = "Over"
		
		}else if(this.pointsScored == this.total){

			var tResult = "Push"
		
		}else{

			var tResult =  "Under"
		}
		return tResult
	}

}


function MoneyLineTeam (teamName, city, sport){

	this.teamName = teamName
	this.city = city
	this.sport = sport
	this.startTime = 0
	this.opp = "none"
	this.moneyLine = 0
	this.score = 0
	this.oppScore = 0
	
	this.gradeGame = function(){

		if(this.score > this.oppScore){

			this.result = "win"
		
		}else if(this.score < this.oppScore){

			this.result = "loss"
		
		}else{

			this.result = "push"
		}
	}

	this.total = 0
	this.pointsScored = function(){

		var totalPoints = this.score + this.oppScore

		return totalPoints
	}

	this.totalResult = function(){

		if(this.pointsScored > this.total){

			var tResult = "Over"
		
		}else if(this.pointsScored == this.total){

			var tResult = "Push"
		
		}else{

			var tResult =  "Under"
		}
		return tResult
	}
	
}




// // function pickATeam(matchup){

// // 	var ranNum = randomBR(1, 2)

// // 	if(ranNum == 1){

// // 		return matchup.favorite
	
// // 	}else{

// // 		return matchup.underdog
// // 	}
// // }

// // function randomBR(min,max){
    
// //     return Math.floor(Math.random()*(max-min+1)+min);
// // }


// // function parlayCalc2(spread1, spread2, amount){

// // 	if(spread1 < 0){

// // 		var parOdds1 = 100/Math.abs(spread1) + 1
	
// // 	}else{

// // 		var parOdds1 = spread1/100 + 1
// // 	}

// // 	if(spread2 < 0){

// // 		var parOdds2 = 100/Math.abs(spread2) + 1
	
// // 	}else{

// // 		var parOdds2 = spread2/100 + 1
// // 	}

// // 	var totalOdds = parOdds1 * parOdds2

// // 	var payout = amount * totalOdds

// // 	return [totalOdds, amount, payout]

// // }

// // function parlayCalc3(spread1, spread2, spread3, amount){

// // 	if(spread1 < 0){

// // 		var parOdds1 = 100/Math.abs(spread1) + 1
	
// // 	}else{

// // 		var parOdds1 = spread1/100 + 1
// // 	}

// // 	if(spread2 < 0){

// // 		var parOdds2 = 100/Math.abs(spread2) + 1
	
// // 	}else{

// // 		var parOdds2 = spread2/100 + 1
// // 	}

// // 	if(spread3 < 0){

// // 		var parOdds3 = 100/Math.abs(spread3) + 1
	
// // 	}else{

// // 		var parOdds3 = spread3/100 + 1
// // 	}

// // 	var totalOdds = parOdds1 * parOdds2 * parOdds3

// // 	var payout = amount * totalOdds

// // 	return [totalOdds, amount, payout]
// // }

// // function parlayCalc4(spread1, spread2, spread3, spread4, amount){

// // 	if(spread1 < 0){

// // 		var parOdds1 = 100/Math.abs(spread1) + 1
	
// // 	}else{

// // 		var parOdds1 = spread1/100 + 1
// // 	}

// // 	if(spread2 < 0){

// // 		var parOdds2 = 100/Math.abs(spread2) + 1
	
// // 	}else{

// // 		var parOdds2 = spread2/100 + 1
// // 	}

// // 	if(spread3 < 0){

// // 		var parOdds3 = 100/Math.abs(spread3) + 1
	
// // 	}else{

// // 		var parOdds3 = spread3/100 + 1
// // 	}

// // 	if(spread4 < 0){

// // 		var parOdds4 = 100/Math.abs(spread4) + 1
	
// // 	}else{

// // 		var parOdds4 = spread4/100 + 1
// // 	}

// // 	var totalOdds = parOdds1 * parOdds2 * parOdds3 * parOdds4

// // 	var payout = amount * totalOdds

// // 	return [totalOdds, amount, payout]
// // }

// // function parlayCalc5(spread1, spread2, spread3, spread4, spread5, amount){

// // 	if(spread1 < 0){

// // 		var parOdds1 = 100/Math.abs(spread1) + 1
	
// // 	}else{

// // 		var parOdds1 = spread1/100 + 1
// // 	}

// // 	if(spread2 < 0){

// // 		var parOdds2 = 100/Math.abs(spread2) + 1
	
// // 	}else{

// // 		var parOdds2 = spread2/100 + 1
// // 	}

// // 	if(spread3 < 0){

// // 		var parOdds3 = 100/Math.abs(spread3) + 1
	
// // 	}else{

// // 		var parOdds3 = spread3/100 + 1
// // 	}

// // 	if(spread4 < 0){

// // 		var parOdds4 = 100/Math.abs(spread4) + 1
	
// // 	}else{

// // 		var parOdds4 = spread4/100 + 1
// // 	}

// // 	if(spread5 < 0){

// // 		var parOdds5 = 100/Math.abs(spread5) + 1
	
// // 	}else{

// // 		var parOdds5 = spread5/100 + 1
// // 	}


// // 	var totalOdds = parOdds1 * parOdds2 * parOdds3 * parOdds4 * parOdds5

// // 	var payout = amount * totalOdds

// // 	return [totalOdds, amount, payout]
// // }


// // function createSpreadMatchup(sport, fav, dog, spread){


// // 	fav.opp = dog
// // 	fav.spread = 0 - spread
// // 	dog.opp = fav
// // 	dog.spread = spread

// // 	var gameMatchup = {

// // 		favorite: fav,
// // 		underdog: dog,
// // 		spread: spread
// // 	}

// // 	if(sport == "NBA"){

// // 		nbaBettingOpt.push(gameMatchup)
// // 	}

// // }

// // function setMatchups(){

// // 	createSpreadMatchup("NBA", Celtics, Hawks, 5)
// // 	createSpreadMatchup("NBA", Sixers, Knicks, 2)
// // 	createSpreadMatchup("NBA", Jazz, Raptors, 9)
// // 	createSpreadMatchup("NBA", Hornets, Nets, 4.5)
// // 	createSpreadMatchup("NBA", Nuggets, Heat, 1)
// // }

// var Celtics = new SpreadTeam("Celtics", "Boston", "NBA")
// var Hawks = new SpreadTeam("Hawks", "Atlanta", "NBA")
// var Sixers = new SpreadTeam("76ers", "Philly", "NBA")
// var Knicks = new SpreadTeam("Knicks", "New York", "NBA")
// var Jazz = new SpreadTeam("Jazz", "Utah", "NBA")
// var Raptors = new SpreadTeam("Raptors", "Toronto", "NBA")
// var Hornets = new SpreadTeam("Hornets", "Charlotte", "NBA")
// var Nets = new SpreadTeam("Nets", "Brooklyn", "NBA")
// var Nuggets = new SpreadTeam("Nuggets", "Denver", "NBA")
// var Heat = new SpreadTeam("Heat", "Miami", "NBA")




// // function SpreadTeam (teamName, city, sport){
	
// // 	this.teamName = teamName
// // 	this.city = city
// // 	this.sport = sport
// // 	this.startTime = 0
// // 	this.opp = "none"
// // 	this.spread = 0
// // 	this.score = 0
// // 	this.oppScore = 0
	
// // 	if(this.sport == "NFL" || this.sport == "CFB"){

// // 		this.twoTeamTeaser = function(){

// // 			x = this.spread + 6.5
// // 			return x
// // 		}
// // 		this.threeTeamTeaser = function(){

// // 			x = this.spread + 9.5
// // 			return x

// // 		}
// // 		this.fiveTeamTeaser = function(){

// // 			x = this.spread + 6.5
// // 			return x
// // 		}
	
// // 	}else{

// // 		this.twoTeamTeaser = function(){

// // 			x = this.spread + 4.5
// // 			return x
// // 		}
// // 		this.threeTeamTeaser = function(){

// // 			x = this.spread + 6.5
// // 			return x

// // 		}
// // 		this.fiveTeamTeaser = function(){

// // 			x = this.spread + 4.5
// // 			return x
// // 		}
// // 	}
	
// // 	this.gradeGame = function(){

// // 		if(this.score + this.spread > this.oppScore){

// // 			this.spreadResult = "win"
		
// // 		}else if (this.score + this.spread < this.oppScore){

// // 			this.spreadResult = "loss"
		
// // 		}else{

// // 			this.spreadResult = "push"
// // 		}

// // 		if(this.score + this.twoTeamTeaser() > this.oppScore){

// // 			this.twoTResult = "win"
		
// // 		}else if(this.score + this.twoTeamTeaser() < this.oppScore){

// // 			this.twoTResult = "loss"
		
// // 		}else{

// // 			this.twoTResult = "push"
// // 		}

// // 		if(this.score + this.threeTeamTeaser() > this.oppScore){

// // 			this.threeTResult = "win"
		
// // 		}else if(this.score + this.twoTeamTeaser() < this.oppScore){

// // 			this.threeTResult = "loss"
		
// // 		}else{

// // 			this.threeTResult = "push"
// // 		}

// // 		if(this.score + this.fiveTeamTeaser() > this.oppScore){

// // 			this.fiveTResult = "win"
		
// // 		}else if(this.score + this.fiveTeamTeaser() < this.oppScore){

// // 			this.fiveTResult = "loss"
		
// // 		}else{

// // 			this.fiveTResult = "push"
// // 		}

// // 	}




// // function MoneyLineTeam (teamName, city, sport){

// // 	this.teamName = teamName
// // 	this.city = city
// // 	this.sport = sport
// // 	this.startTime = 0
// // 	this.opp = "none"
// // 	this.moneyLine = 0
// // 	this.score = 0
// // 	this.oppScore = 0
	
// // 	this.gradeGame = function(){

// // 		if(this.score > this.oppScore){

// // 			this.result = "win"
		
// // 		}else if(this.score < this.oppScore){

// // 			this.result = "loss"
		
// // 		}else{

// // 			this.result = "push"
// // 		}
// // 	}
	
// // }



// function pickOneTeam(){

// 	var team = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]

// }

// function pickTwoTeams(){

// 	var team1 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// 	var team2 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// }

// function pickThreeTeams(){

// 	var team1 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// 	var team2 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// 	var team3 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// }

// function pickFourTeams(){

// 	var team1 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// 	var team2 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// 	var team3 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// 	var team4 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// }

// function pickFiveTeams(){

// 	var team1 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// 	var team2 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// 	var team3 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// 	var team4 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// 	var team5 = nbaBettingOpt[Math.floor(Math.random() * nbaBettingOpt.length)]
// }