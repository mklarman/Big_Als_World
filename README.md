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

Users/Gamblers will play vs Big Al in various casino games.  I want to keep stats for the user in each game:  their win/loss, how many games have they played, etc.  So each game will need a model and a form that gets filled out.  Stats will need to be user id specific and be sent to a form that submits to the database, I need to be able to use notation like: current_user.blackjack to get the blackjack stats.  Possible games: blackjack, keno, maybe hi/lo, find a way to integrate the lottery software.  Also have a forum with posts about gambling and pop culture.

There will also be a loan shark, so the user will have loans.  Loans will need to have a model.  Loans will work on logins.  Loans will be spread out over ten payments and payments will be due at 24 hour cycles, this pressures the user to play or else owe. We will need cases where a user needs to borrow and they owe you already at the same time.  Allow players to send money out to each other?  Maybe make a loan to another play?  Have to figure out how to do that.

Relationships

USER
has many posts
has many loans
has many blackjack stats
has many keno stats
has many hi-lo stats

So, users will sign up and immediately have to get a loan.  The first loan will be standard for everyone, maybe 500 BAW Coins.  The user will then owe 10 payments of $65 BAW Coins in the next 10 24hr cycles.  The user is then free to take the coins to the casino and play with them.

There will also be a forum where Big Al will be very active and others can post too.  Maybe in the future even some video.

There needs to be a view where each game gets played, a view for the loan, a view for their profile, a view for the forums, maybe a view for leaders/leaderboards.

USERS will be able to bet as many coins as they want at a time.   
