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
