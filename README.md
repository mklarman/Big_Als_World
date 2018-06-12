<!-- # README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->

Big Al's World:

Users are virtual gangsters.  They are raqueteers who make money by being a bookie, number writer, and loan shark.  The user will have to build their client base.  Clients are computer generated customers for the user.  Customers are sports bettors, lottery players, and borrowers.  Customers will come in types: small timers, pay dumpers, High Rollers.  A users "income" will come from the money generated by their clients - their raqueteering operations.  Users will have to acquire clients, and acquire stronger clients.  When someone signs up they are given one client.  This client will bet a game or play a number and the user's opertions will begin.  From there the user hs to acquire cients.

Possible ways of acquiring clients:

1) Watch advertising
2) Buy
3) Activity in a forum
4) Every so many logins
5) Consecutive days of winning action

Sports Betting

Users will have a button to check their sports action, when the button is clicked the function that generates the sports bets of their clients runs.  It will generate the type of bet: straight, parlay, teaser.  It will randomly select the number of teams needed to fullfill the bet, and it will generate an amount within the range of type of customer it is.

Once the bet is set, the next day scores to the games are input and then the wins/losses are computed and their sports book income is updated.  Stats will be kept year to date and aggregate.

Number Writing

If a user wants to see the numbers that their clients have played they will click a button, atached to that button will be a function that generates the numbers that their clients have played.  It will generate the kind of number: 3 digit, four digit, or five digit.  It will also determine the type of wager: straight or boxed.  The user will generate their lottery results when ready(they will draw the numbers) or the app has scheduled draw for the site that all users use for their results.  Once the numbers are drawn, the results are computed and the users number book is updated.  Stats are kept year to date plus aggregate.

Sharking

Sharking will work when a client of the user loses more than their limit(so each client type will need a limit, once the limit is crossed then the user will need to go on a payment plan, i.e. borrow the money).  Loans will have 10 payments and incur a 30% interest rate.  The formula for payments will be (loan amount x 1.3) / 10.  Upon each login, the user will recieve any loan payments due.  Sharking stats will keep track of how much interest the user has collected, both year to date and aggregate.

Their total raqueteering stats will be kept also year to date and in aggregate.  Their will be levels to earn, Users will have to build up their character and become more and more powerful.

Site will include a forum with characters, maybe a casino: blackjack, keno, where the user can gamble with their income and possibly earn clients.

The Math and The Data:

Anything there will be an instance of, I will need to capture in a form.  Looking like there will be a client controller that controls the clients of each user.  That means I need to access a user's cleint list with dot notation then loop it and put it through functions.

The functions that generate sports bets and lottery numbers for the clients probably have to be done in ruby?  Maybe javascript?

The user, in their profile, will have a button appear where they can check their sports action and number action it's these buttons that will generate the functions that create the wagers for the clients.  Have the bets stagger in, so if they have 20 clients, then if they check their sports action early, then only one or two clients have their bets in, the more often they come back, the more bets that have been placed by more clients.

When clients are generated, they also need to be made a user of the site and I need to collect these usernames and passwords in a directory that can be indexed with a search.  Clients hang out in the forums and the user has to sometimes chase them down and confront them to get paid.

Clients will also be an object that has key value pairs.

First Name: 
Last Name:
City:
State:
Type:
Money Avail:
Wager Range:
Bets On: 
Rep/Credit Rating: 
Affiliation: 
wagerType: [An array that will hold the proper ratio of bet types]
descr: A string that is a rating describing this clients action.

User can accept a client from the client pool or not.  Clients should be mined by the community in some way, maybe by post total in the forum, watching ads, or maybe purchasing a client directly.  It is competitive atmosphere to get a client.  User's have to interact with possible clients on the forums and try to get them onto their sheet, so users start building their client sheets up and they start backing more and more wagers and their income goes up, as their income goes up they advance in level.  Keep building out levels.

User/Client relationship:

Any User that has been bought maybe should have an infinity bankroll, but they pay for the type and users can not lose the paid clients.

The quality of mined clients should depend on something, predictions?  Earnings?  A client is mined after so much community work: post count, wager count, etc.  After the work is completed, then the predictor is checked to see where it is - the corresponding client is generated.  Once the client is generated, they are a free agent, their affiliation is none.  Community members will compete for their business. 

Sports Betting:

There will be a page where the odds will be displayed, also a visible admin form where odds can be updated.  This is the sites sports book.  It will have a button where the user can see sports betting stats, how much their book is up and a win/loss statement for each player.  Each day their is a +/- for the sports book. And then there is a summation of all the "+/-"'s that the book has.

Bets are generated when the user clicks on the button to view them.  If it is more than four hours before games start then let only one wager appear.  Wagers should stagger in, so the more the user returns to the site, the more action they will have.  We don't want to dump all the action in one shot, do we?  They should have to come back three times to get maximum action.

Generated bets are functions that randmoly assign bets and amounts to their clients according to that clients parameters.  So the function needs access to the users client list.  If it is early, the function will only randomly select one client, as it gets later, more clients get selected.  When a client gets selected.  First an amount is generated, then the type of wager is selected, then the teams needed to fill the wagers are randomly selected.  Teams need to be invovled in games that haven't started yet.  Once games have started they need to be removed from the team pool so they can not be selected.  There needs to be an array wagerOptions that holds all available wager options either totals or sides.  If a bettor tries to enter a 6 team parlay and there are only 5 wagerOptions then the user needs to be told that.

Clients will need to have:

wagerType: [An array that will hold the proper ratio of bets]
descr: A string that is a rating describing this clients action.

Clients will have a wager description which will tell the user what the client likes to bet: Straight Only, Straight and Exotics, mostly Exotics.

Once action is entered, scores will have to be entered when the games are over and user sports books will have to be updated.  For scoring the games I will need the scores and the spread for NFL, NBA, CFB, CBB.  MLB and NHL.  A function will determine which score is higher when the spread points are subtracted from the favorites score.  A winner, loser, or push is marked for each team in a game.  Once every team has been denoted one of the three results then the users sports book is graded for winners and losers.  For straight bets the function is straight forward, a simple if statement asking if the teams denotation is as a winner, loser, or push.  If a loser then the sports book wins 110% of the bet value, if winner then the sports book loses 100% of the bet value.

For parlays, have to loop through the teams and for each team ask if they are denoted a winner, loser, or a push.  Each one is put in their own array, actually once a loser is detected the loop can break, we'll see.  Then once those arrays are filled we have a set of if statements wrapped around a parent if statement that says if (the losing array == 0).  The inner if statements will be all the possible win options.

For Reverses, also need to loop through the teams and separarte winners, losers, and pushes.  Then have if statements for result options.

In all these functions either a Clients account is credited/debited or the user's sports book is for every wager.

Need functions that generate the various number of bets possible.  So, if the bet is a parlay a function will decide if it is a two team parlay or up to a ten team parlay, then the bet is filled with a random selection of the teams.  The function will also have to check to see how many wagerOptions are possible.  The number of teams in the exotic bets can't exceed the number of wagerOptions.

Need a function that combs over the User's clients and selects sports bettors.
Need a function that takes selected clients and generates sports wagers for them.
Need a function that grades the wagers and debits/credits the accounts.

Bet Types:

straight
parlay: 2 - 10 teams
reverse: 2 - 4 teams
teasers: 2 - 5 teams

Scoring teasers will be tricky, all wagerOptions will need a spread denotation and a teaser denotation so when teasers are graded this team has a grade for that.  wagerOptions will need to be graded for every teaser option so when the teaser function is called it can look at the teaser grade.

The forms:

I need a form for all the sports games.  Will it be game by game?  Have to think about that.  Then I need to update that form with the scores.  Once scores are in, wagerOptions need to be graded for spread, teaser, and moneyline bets, so all teams wil have 6 grades for the six possible wager types they can be in.

Might need two wagerOption pools: Money Line and Spread because Money Line does not have a teaser and do we want to mix Money Line and Spread on a parlay?



Money line parlays:

for favorites: divide 100 by the absolute value of the line: 100/var

for underdogs: divide the line by 100: var/100

add 1 to all results then multiply all results together.  That is the odds of hitting the parlay.

Games are entered.  The betting data will display in the sports book so it can be viewed, separated by sport.  When scores are entered, teams have to be graded ATS as well as all the teaser spreads.  Teams will be objects with five properties in spread sports only, no need in MLB and NHL.  When a team is graded it will also be graded for all teasers, so if it is in a teaser, the loop will look at the 3 team teaser score for all teams in a 3 team teaser.

Clients belong to Users, bets belong to clients.  Need a form for each type of bet.

All teams will need to be objects with the following properties:

city:
sport:
startTime:
opp:
spread:
score:
oppScore

Included in the team objects will be functions that will calculate all ATS results for all bets(straight and teasers), this will flag each team as winners or losers.  Each team should have a teaser spread calculated for it from the jump.  Need two different contrsuctors, one for moneyline sports and one for spread.

Client Objects

fname:
lname:
state:
bankroll:
betsOn:
wagerAmount:
wagerCount:
tendency:
getType:
getAmount:
getTeams:
fillWager: function(){ 

var clientWager = {type: getType,
 amount: getAmount,
 teams: getTeams		
 }
 this.sportsBet.push(clientWager)

}
sportsBets: []
lotteryBets:[]




Team OBJ

teamName:
City:
startTime:
opp:
spread:
twoTeamSpread:
threeTeamSpread:
fiveTeamSpread:
score:
opp:Score
straightResult
twoTeamResult:
threeTeamResult:
fiveTeamResult:

Need to be able to generate the wagers and fill them and score them.

The client object has to hold all the functions for generating a wager:

Step 1, select the type of wager.
Step 2, select an amount.
Step 3, select the teams.

Wagers are objects that have amounts, types, and teams.  Wagers must be cleared after they are scored.

getWager: 

Sports betting will be generated by controlling three objects: User, Client, Teams.

The betting pool should hold game objects that have both teams in a matchup, then one is randomly chosen, so it is a this or that decision.

The client object needs to place bets.

Select type
select amount
select teams
fill in newWager object and push it to sportsBets.
grade the wager and debit/credit client bankroll and the sportsBook of their owner.

teams have to be separated by sport and and total at the set matchup function.

I'm thinking now that maybe a Client should randomly pick all the games, issue their opinion.  Those opinions are put in an array and then teams are randomly picked from that array to fill wagers.  This will keep clients from picking both sides to a game.

How to make total selections.  Team objects need a gamePoints, gameTotal, totalResult: Over or Under.  There needs to be a global array ["Over", "Under"].  Take a random pick from the array and add the gameTotal to it, when total game points are entered then run a function that compares total points to the total line and turn total result either Over, Under, or Push.

for the printing of the bets I will need the string: pick + spread.  To grade I will need an object that I can access and compare.  Teasers will need to show the teaser line.

I need functions to fill each type of teaser, for the other wagers filling only matters on the number of teams.

Sports Betting:

1) Teams created
2) Matchups set
3)Client renders opinion
4) Games sorted accordingly
5) Wager type is selected
6) Wager is filled
7) Wager is displayed
8) scores are entered, needed team functions are run
9) Wagers are graded, accounts debited/credited


Users will be stepping into the shoes of a bookie.  I want to archive each days action for the user so they can go back and see how they did on any given day.  Also the user will see the stats of each client, their win/loss reports which will include how the client has done overall and how have they done with each type of wager they have placed.  Give them some avg, stats like avg wager placed and avg win/loss per day.  Also, have the user see how they stand overall vs each type of wager across all clients.  How much money have they won or lost vs each type of wager across all clients.

The results page should show the graded wagers with the red or green figure next to them with the "+" or "-".  Then a daily figure at the bottom.

The day before will be the default showing, but have a calendar where the user can click on whatever day they wish and see the results.

Let the user create leagues where they see whose book makes more money over the course of a sports season (use a particular sport), or for a determined amount of time where all sports are used.  A league admin creates the league.  Need to know how many people in the league.  Start date and end date for the league.  Customize the clients for each book, how many exotic clients?  How many straight?  How many mixed?  League rankings, ranking the books by profit.  So they can see where they stand, so a league home page.

Front end will be clean and neat with the display of the information.  

Right now am in the middle of debugging reverse scoring, next week will be finished with the scoring function, then need to add in a protection of putting the same team twice in an exotic in the genWager function.

What to save in the DB:

the daily results of the books, the league data, the users sports book(starting with $5,000), each users client list.

Users will fish for clients.  Clients will have a secret password attached to them, there will be an imput box where the user will enter words to see if they can match any of the secret passwords.  If they match it then they get that client.

PAGES:

Users will need a profile page:  Shares details from their sportsbook, some personal info.  Their positions in the games tonight.

Users will also need an action sheet.  That will show the action to the user.  Users can sift through old action sheets that have been graded so they can see how they did on any given day, they current action is not graded yet of course.  On the current action sheet will list the action by client name, under the client name will be the bet imformation: amount, type, teams.

What is the set-up to the action page?  The sports odds page?  The user will have to click a button to generate their sports action from their client list.  When that button is pressed, the action will be generated and saved and displayed for the user.  That button will say something like my book.

For the league play: the administrator of the league will set the rosters.  How many clients will each player have?  How many of each type of client?  The bets will come in blocks.  Blocks of straight, reverse, and teasers are 3 clients, blocks for parlays will be four long.  Or maybe let them say how many clients and then custom build them, let them say how many of each bet type.

From day to day, the player can log into the league and to his roster and set the stakes of the clients.  This is where the client can influence outcome.  If they want to set their exotic players high or low they can.  The higher you set the exotic, the more the client can win if they do win.

Leagues can be played as a running tally, or in head-up matchups with a sports book competing against another in a battle of profits for that day.

League pages
Profile Page
Action sheet
Odds to games
Client Fishing
Home page
Explanation page








<!-- Users/Gamblers will play vs Big Al in various casino games.  I want to keep stats for the user in each game:  their win/loss, how many games have they played, etc.  So each game will need a model and a form that gets filled out.  Stats will need to be user id specific and be sent to a form that submits to the database, I need to be able to use notation like: current_user.blackjack to get the blackjack stats.  Possible games: blackjack, keno, maybe hi/lo, find a way to integrate the lottery software.  Also have a forum with posts about gambling and pop culture.

There will also be a loan shark, so the user will have loans.  Loans will need to have a model.  Loans will work on logins.  Loans will be spread out over ten payments and payments will be due at 24 hour cycles, this pressures the user to play or else owe. We will need cases where a user needs to borrow and they owe you already at the same time.  Allow players to send money out to each other?  Maybe make a loan to another play?  Have to figure out how to do that.

Relationships

USER
has one bankroll
has many posts
has many loans
has many blackjack stats
has many keno stats
has many hi-lo stats

Bankroll
belongs to User

Posts
belongs to User

Loan
belongs to User

BlackJack
belongs to User

Keno
belongs to User

Hi/Lo
belongs to User

What stats for the games?  Win/Loss over time: last session, last five sessions.  Maybe a search bar that allows the user to decide how far to go back.  How many hands/games did they play?  So, these things need to be stored into the database.

So, users will sign up and immediately have to get a loan.  The first loan will be standard for everyone, maybe 500 BAW Coins.  The user will then owe 10 payments of $65 BAW Coins in the next 10 24hr cycles.  The user is then free to take the coins to the casino and play with them.

There will also be a forum where Big Al will be very active and others can post too.  Maybe in the future even some video.

There needs to be a view where each game gets played, a view for the loan, a view for their profile, a view for the forums, maybe a view for leaders/leaderboards.

USERS will be able to bet as many coins as they want at a time.    -->
