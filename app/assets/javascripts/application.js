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
