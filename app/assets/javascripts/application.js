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
var wagers = []
var betStyles = ["Small Timer", "Pay Dumper", "High Roller"]



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

			var matchup = nbaBettingOpt.pop()
			var pick = [pickATeam(matchup)]

			newWager.teams.push(pick)
				
		}else if(newWager.type == "2 team parlay" || newWager.type == "2 team teaser" || newWager.type == "2 team reverse"){

			var exoticWager = []
			var matchup1 = nbaBettingOpt.pop()
			var matchup2 = nbaBettingOpt.pop()
			var pick1 = pickATeam(matchup1)
			var pick2 = pickATeam(matchup2)
			exoticWager.push(pick1)
			exoticWager.push(pick2)
			newWager.teams.push(exoticWager)
				
		}else if(newWager.type == "3 team parlay" || newWager.type == "3 team teaser" || newWager.type == "3 team reverse"){

			var exoticWager = []
			var matchup1 = nbaBettingOpt.pop()
			var matchup2 = nbaBettingOpt.pop()
			var matchup3 = nbaBettingOpt.pop()
			var pick1 = pickATeam(matchup1)
			var pick2 = pickATeam(matchup2)
			var pick3 = pickATeam(matchup3)
			exoticWager.push(pick1)
			exoticWager.push(pick2)
			exoticWager.push(pick3)
			newWager.teams.push(exoticWager)
				
		}else if(newWager.type == "4 team parlay" || newWager.type == "4 team teaser" || newWager.type == "4 team reverse"){

			var exoticWager = []
			var matchup1 = nbaBettingOpt.pop()
			var matchup2 = nbaBettingOpt.pop()
			var matchup3 = nbaBettingOpt.pop()
			var matchup4 = nbaBettingOpt.pop()
			var pick1 = pickATeam(matchup1)
			var pick2 = pickATeam(matchup2)
			var pick3 = pickATeam(matchup3)
			var pick4 = pickATeam(matchup4)
			exoticWager.push(pick1)
			exoticWager.push(pick2)
			exoticWager.push(pick3)
			exoticWager.push(pick4)
			newWager.teams.push(exoticWager)
		
		}else{

			var exoticWager = []
			var matchup1 = nbaBettingOpt.pop()
			var matchup2 = nbaBettingOpt.pop()
			var matchup3 = nbaBettingOpt.pop()
			var matchup4 = nbaBettingOpt.pop()
			var matchup5 = nbaBettingOpt.pop()
			var pick1 = pickATeam(matchup1)
			var pick2 = pickATeam(matchup2)
			var pick3 = pickATeam(matchup3)
			var pick4 = pickATeam(matchup4)
			var pick5 = pickATeam(matchup5)
			exoticWager.push(pick1)
			exoticWager.push(pick2)
			exoticWager.push(pick3)
			exoticWager.push(pick4)
			exoticWager.push(pick5)
			newWager.teams.push(exoticWager)
		}

		this.sportsBets.push(newWager)
		wagers.push(newWager)

	}

	this.gradeWagers = function(){

		var winnerCircle = []
		var losers = []
		var pushes = []
		var twoTWins = []
		var twoTLoss = []
		var threeTWin = []
		var threeTLoss = []
		var fiveTWin = []
		var fiveTLoss = []

		for(i=0; i<this.sportsBets.length; i++){

			for(z=0; z<this.sportsBets[i].teams.length; z++){

				for(x=0; x<this.sportsBets[i].teams[z].length; x++){

					if(this.sportsBets[i].teams[z][x].spreadResult == "win"){

						winnerCircle.push(this.sportsBets[i].teams[z][x])
					
					}else if (this.sportsBets[i].teams[z][x].spreadResult == "loss"){

						losers.push(this.sportsBets[i].teams[z][x])
					
					}else{

						pushes.push(this.sportsBets[i].teams[z][x])
					}

					if(this.sportsBets[i].teams[z][x].twoTResult == "win"){

						twoTWins.push(this.sportsBets[i].teams[z][x])
					
					}else{

						twoTLoss.push(this.sportsBets[i].teams[z][x])

					}

					if(this.sportsBets[i].teams[z][x].threeTResult == "win"){

						threeTWin.push(this.sportsBets[i].teams[z][x])
					
					}else{

						threeTLoss.push(this.sportsBets[i].teams[z][x])
					}

					if(this.sportsBets[i].teams[z][x].fiveTResult == "win"){

						fiveTWin.push(this.sportsBets[i].teams[z][x])
					
					}else{

						fiveTLoss.push(this.sportsBets[i].teams[z][x])
					}
				}
			}
			

		}

	}

	this.gradeWagers = function(){

		

		for(i=0; i<this.sportsBets.length; i++){

			for(z=0; z<this.sportsBets[i].teams.length; z++){

				for(x=0; x<this.sportsBets[i].teams[z].length; x++){

					if(this.sportsBets[i].teams[z][x].spreadResult == "win"){

						winnerCircle.push(this.sportsBets[i].teams[z][x])

					}else if (this.sportsBets[i].teams[z][x].spreadResult == "loss"){

						losers.push(this.sportsBets[i].teams[z][x])
					
					}else{

						pushes.push(this.sportsBets[i].teams[z][x])

					}

					if(this.sportsBets[i].teams[z][x].twoTResult == "win"){

						twoTWins.push(this.sportsBets[i].teams[z][x])

					}else{

						twoTLoss.push(this.sportsBets[i].teams[z][x])
					}

					if(this.sportsBets[i].teams[z][x].threeTResult == "win"){

						threeTWin.push(this.sportsBets[i].teams[z][x])
					
					}else{

						threeTLoss.push(this.sportsBets[i].teams[z][x])
					}

					if(this.sportsBets[i].teams[z][x].fiveTResult == "win"){

						fiveTWin.push(this.sportsBets[i].teams[z][x])
					
					}else{

						fiveTLoss.push(this.sportsBets[i].teams[z][x])

					}


				}
			}

			if(this.sportsBets[i].type = "straight"){

				if(winnerCircle.length == 1 && losers.length == 0){

					this.bankroll += this.sportsBets[i].amount
				
				}else if(winnerCircle.length == 0 && pushes.length == 1){

					this.bankroll = this.bankroll
				
				}else{

					var creditAmount = this.sportsBets[i].amount * 1.1

					this.bankroll -= creditAmount
				}
			
			}else if(this.sportsBets[i].type = "2 team parlay"){

				if(losers.length > 0){

					this.bankroll -= this.sportsBets[i].amount
				
				}else if(losers.length == 0 && pushes.length == 1 && winnerCircle.length == 1){

					this.bankroll += this.sportsBets[i].amount

				}else{

					var creditAmount = this.sportsBets[i].amount * 2.5
					this.bankroll += creditAmount
				}

			}else if(this.sportsBets[i].type = "3 team parlay"){

				if(losers.length > 0){

					this.bankroll -= this.sportsBets[i].amount

				}else{

					if(losers.length == 0){

						if(winnerCircle.length == 1){

							this.bankroll += this.sportsBets[i].amount

						}else if(winnerCircle.length == 2){

							var creditAmount = this.sportsBets[i].amount * 2.5
							this.bankroll += creditAmount

						}else{

							var creditAmount = this.sportsBets[i].amount * 5
							this.bankroll += creditAmount

						}

					}
				}
			
			}else if(this.sportsBets[i].type = "4 team parlay"){

				if(losers.length > 0){

					this.bankroll -= this.sportsBets[i].amount

				}else{

					if(losers.length == 0){

						if(winnerCircle.length == 1){

							this.bankroll += this.sportsBets[i].amount

						}else if(winnerCircle.length == 2){

							var creditAmount = this.sportsBets[i].amount * 2.5
							this.bankroll += creditAmount

						}else if(winnerCircle.length == 3){

							var creditAmount = this.sportsBets[i].amount * 5
							this.bankroll += creditAmount

						}else{

							var creditAmount = this.sportsBets[i].amount * 10
							this.bankroll += creditAmount

						}

					}

				}

			}else if(this.sportsBets[i].type = "5 team parlay"){

				if(losers.length > 0){

					this.bankroll -= this.sportsBets[i].amount

				}else{

					if(losers.length == 0){

						if(winnerCircle.length == 1){

							this.bankroll += this.sportsBets[i].amount

						}else if(winnerCircle.length == 2){

							var creditAmount = this.sportsBets[i].amount * 2.5
							this.bankroll += creditAmount

						}else if(winnerCircle.length == 3){

							var creditAmount = this.sportsBets[i].amount * 5
							this.bankroll += creditAmount

						}else if(winnerCircle.length == 4){

							var creditAmount = this.sportsBets[i].amount * 10
							this.bankroll += creditAmount

						}else{

							var creditAmount = this.sportsBets[i].amount * 20
							this.bankroll += creditAmount

						}

					}

				}

			}else if(this.sportsBets[i].type = "2 team reverse"){

				if(losers.length == 2){

					var creditAmount = this.sportsBets[i].amount * 2.2
					this.bankroll -= creditAmount

				}else if(losers.length == 1 && pushes.length == 1){

					var creditAmount = this.sportsBets[i].amount * 1.1
					this.bankroll -= creditAmount
				
				}else if (winnerCircle.length == 1 && pushes.length ==1){

					this.bankroll += this.sportsBets[i].amount
				
				}else if(pushes.length == 2){

					this.bankroll = this.bankroll

				}else{

					var creditAmount = this.sportsBets[i].amount * 4
					this.bankroll += creditAmount

				}
			
			}else if(this.sportsBets[i].type = "3 team reverse"){

				if(losers.length == 3){

					var creditAmount = this.sportsBets[i].amount * 6.6
					this.bankroll -= creditAmount
				
				}else if(losers.length == 2 && pushes.length == 1){

					var creditAmount = this.sportsBets[i].amount * 4.4
					this.bankroll -= creditAmount
				
				}else if(losers.length == 1 && pushes.length == 2){

					this.bankroll -= this.sportsBets[i].amount
				
				}else if(pushes.length == 3){

					this.bankroll = this.bankroll
				
				}else if (losers.length == 2 && winnerCircle.length == 1){

					var creditAmount = this.sportsBets[i].amount * 3.4
					this.bankroll -= creditAmount
				
				}else if(losers.length == 1 && winnerCircle.length == 1 && pushes.length == 1){

					var creditAmount = this.sportsBets[i].amount * 1.3
					this.bankroll -= creditAmount

				}else if(losers.length == 1 && winnerCircle.length == 2){

					var creditAmount = this.sportsBets[i].amount * 1.6
					this.bankroll += creditAmount
				
				}else{

					creditAmount = this.sportsBets[i].amount * 12
					this.bankroll += creditAmount
				}

			}else if(this.sportsBets[i].type = "4 team reverse"){

				if(losers.length == 4){

					var creditAmount = this.sportsBets[i].amount * 13.2
					this.bankroll -= creditAmount
				
				}else if(losers.length == 3 && pushes.length == 1){

					var creditAmount = this.sportsBets[1].amount * 9.9
					this.bankroll -= creditAmount
				
				}else if(losers.length == 2 && pushes.length == 2){

					var creditAmount = this.sportsBets[i].amount * 6.6
					this.bankroll -= creditAmount
				
				}else if(losers.length == 1 && pushes.length == 3){

					var creditAmount = this.sportsBets[i].amount * 3.3
					this.bankroll -= creditAmount

				}else if(pushes.length == 4){

					this.bankroll = this.bankroll
				
				}else if(losers.length == 2 && winnerCircle.length == 1 && pushes.length == 1){

					var creditAmount = this.sportsBets[i].amount * 3.8
					this.bankroll -= creditAmount

				}else if(losers.length == 1 && winnerCircle.length == 1 && pushes.length == 2){

					var creditAmount = this.sportsBets[i].amount * 1.4
					this.bankroll -= creditAmount

				}else if(losers.length == 1 && winnerCircle.length == 2 && pushes.length == 1){

					var creditAmount = this.sportsBets[i].amount * 2.5
					this.bankroll += creditAmount

				}else if(winnerCircle.length == 1 && pushes.length == 3){

					var creditAmount = this.sportsBets[i].amount * 3
					this.bankroll += creditAmount
				
				}else if(winnerCircle.length == 2 && pushes.length == 2){

					var creditAmount = this.sportsBets[i].amount * 8
					this.bankroll += creditAmount
				
				}else if(winnerCircle.length == 3 && pushes.amount == 1){

					var creditAmount = this.sportsBets[i].amount * 15
					this.bankroll += creditAmount

				}else{

					var creditAmount = this.sportsBets[i].amount * 24
					this.bankroll += creditAmount
				}

			}else if(this.sportsBets[i].type = "2 team teaser"){

				if(twoTLoss.length > 0){

					var creditAmount = this.sportsBets[i].amount * 1.2
					this.bankroll -= creditAmount
				
				}else{

					var creditAmount = this.sportsBets[i].amount
					this.bankroll += creditAmount
				}

			}else if(this.sportsBets[i].type = "3 team teaser"){

				if(threeTLoss.length > 0){

					var creditAmount = this.sportsBets[i].amount * 1.4
					this.bankroll -= creditAmount
				
				}else{

					var creditAmount = this.sportsBets[i].amount
					this.bankroll += creditAmount

				}

			}else{

				if(fiveTLoss.length > 0){

					var creditAmount = this.sportsBets[i].amount * 1.1
					this.bankroll -= creditAmount

				}else{

					var creditAmount = this.sportsBets[i].amount * 5
					this.bankroll += creditAmount

				}
		}
  }	




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


function createSpreadMatchup(sport, fav, dog, spread){


	fav.opp = dog
	fav.spread = 0 - spread
	dog.opp = fav
	dog.spread = spread

	var gameMatchup = {

		favorite: fav,
		underdog: dog,
		spread: spread
	}

	if(sport == "NBA"){

		nbaBettingOpt.push(gameMatchup)
	}

}

function setMatchups(){

	createSpreadMatchup("NBA", Celtics, Hawks, 5)
	createSpreadMatchup("NBA", Sixers, Knicks, 2)
	createSpreadMatchup("NBA", Jazz, Raptors, 9)
	createSpreadMatchup("NBA", Hornets, Nets, 4.5)
	createSpreadMatchup("NBA", Nuggets, Heat, 1)
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
	
}
// function gradeTeams(fav, dog, spread, favScore, dogScore){

// 	if(favScore - spread > dogScore){

// 		dog.straight = "loss"
// 		fav.straight = "win"
// 		fav.twoTeam = "win"
// 		fav.threeTeam = "win"
// 		fav.fiveTeam = "win"
// 	}else if(favScore - spread == dogScore){

// 		dog.straight = "push"
// 		fav.straight = "push"
// 		fav.twoTeam = "win"
// 		fav.threeTeam = "win"
// 		fav.fiveTeam = "win"
// 		dog.twoTeam = "win"
// 		dog.threeTeam = "win"
// 		dog.fiveTeam = "win"

// 	}else{

// 		dog.straight = "win"
// 		fav.straight = "loss"
		
// 		if(favScore - spread + 6 > dogScore){

// 			fav.twoTeam = "win"
// 			fav.fiveTeam = "win"
	

// 		}else if(favScore - spread + 6 == dogScore){

// 			fav.twoTeam = "push"
// 			fav.fiveTeam = "push"
		
// 		}else{

// 			fav.twoTeam = "loss"
// 			fav.fiveTeam = "loss"

// 		}

// 		if(favScore - spread + 10 > dogScore){

// 			fav.threeTeam = "win"
		
// 		}else if (favScore - spread + 10 == dogScore){

// 			fav.threeTeam = "push"
		
// 		}else{

// 			fav.threeTeam = "loss"
// 		}

// 		if(dogScore + spread + 6 > favScore){

// 			dog.twoTeam = "win"
// 			dog.fiveTeam = "win"
		
// 		}else if (dogScore + spread + 6 == favScore){

// 			dog.twoTeam = "push"
// 			dog.fiveTeam = "push"
		
// 		}else{

// 			dog.twoTeam = "loss"
// 			dog.fiveTeam = "loss"
// 		}

// 		if(dogScore + spread + 10 > favScore){

// 			dog.threeTeam = "win"
		
// 		}else if(dogScore + spread + 10 == favScore){

// 			dog.threeTeam = "push"
		
// 		}else{

// 			dog.threeTeam = "loss"
// 		}

// 	}

// 	return [fav, dog]

// }

// var Celtics = new CreateTeam("Boston", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Celtics)

// var Hawks = new CreateTeam("Atlanta", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Hawks)

// var Nets = new CreateTeam("Brooklyn", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Nets)

// var Hornets = new CreateTeam("Charlotte", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Hornets)

// var Bulls = new CreateTeam("Chicago", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Bulls)

// var Cavaliers = new CreateTeam("Cleveland", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Cavaliers)

// var Mavericks = new CreateTeam("Dallas", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Mavericks)

// var Nuggets = new CreateTeam("Denver", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Nuggets)

// var Pistons = new CreateTeam("Detroit", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Pistons)

// var Warriors = new CreateTeam("Golden State", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Warriors)

// var Rockets = new CreateTeam("Houston", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Rockets)

// var Pacers = new CreateTeam("Indiana", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Pacers)

// var Clippers = new CreateTeam("Los Angeles", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Clippers)

// var Lakers = new CreateTeam("Los Angeles", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Lakers)

// var Grizzlies = new CreateTeam("Memphis", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Grizzlies)

// var Heat = new CreateTeam("Miami", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Heat)

// var Bucks = new CreateTeam("Milwaukee", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Bucks)

// var Timberwolves = new CreateTeam("Minnesota", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Timberwolves)

// var Pelicans = new CreateTeam("New Orleans", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Pelicans)

// var Knicks = new CreateTeam("New York", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Knicks)

// var Thunder = new CreateTeam("Oklahoma City", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Thunder)

// var Magic = new CreateTeam("Orlando", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Magic)

// var Sixers = new CreateTeam("Philadelphia", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Sixers)

// var Suns = new CreateTeam("Phoenix", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Suns)

// var Blazers = new CreateTeam("Portland", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Blazers)

// var Kings = new CreateTeam("Sacramento", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Kings)

// var Spurs = new CreateTeam("San Antonio", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Spurs)

// var Raptors = new CreateTeam("Toronto", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Raptors)

// var Jazz = new CreateTeam("Utah", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Jazz)

// var Wizards = new CreateTeam("Washington", "NBA", 0, "none", 0, 0, 0, "N/A", "N/A", "N/A", "N/A")
// nbaTeams.push(Wizards)

// function Client(first, last, state, bankroll, bets, type, pref, risk, affiliation){

// 	this.firstName = first
// 	this.lastName = last
// 	this.state = state
// 	this.bankroll = bankroll
// 	this.bets = bets
// 	this.type = type
// 	this.pref = pref
// 	this.risk = risk
// 	this.affiliation = affiliation


// }

// function createClient(){

// 	var pickFname = fnames[Math.floor(Math.random() * fnames.length)];
// 	var pickLname = lnames[Math.floor(Math.random() * lnames.length)];
// 	var pickState = stateNames[Math.floor(Math.random() * stateNames.length)];
// 	var kindOfClient = clientTypes[Math.floor(Math.random() * clientTypes.length)];
// 	var clientPref = kinds[Math.floor(Math.random() * kinds.length)];
// 	var clientRat = creditRating[Math.floor(Math.random() * creditRating.length)];

// 	if(kindOfClient == "Small Timer"){

// 		var bankAmount = randomBR(bankroll1[0], bankroll1[1])
// 		var betAmounts = betsFor1
	
// 	}else if(kindOfClient == "Pay Dumper"){

// 		var bankAmount = randomBR(bankroll2[0], bankroll2[1])
// 		var betAmounts = betsFor2
	
// 	}else{

// 		var bankAmount = randomBR(bankroll3[0], bankroll3[1])
// 		var betAmounts = betsFor3
// 	}

// 	var nextClient = new Client(fnames[pickFname], lnames[pickLname], stateNames[pickState], bankAmount, betAmounts, clientTypes[kindOfClient], kinds[clientPref], creditRating[clientRat], false)

// 	allClients.push(nextClient)

// }


