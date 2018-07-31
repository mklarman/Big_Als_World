class ClientsController < ApplicationController

	def new
		@client = Client.new
		@user = current_user
	end

	def create

		user = current_user
		client = Client.new(client_params)
		client.user_id = user.id
		
		if client.save
			
			redirect_to client_path(client.id)
  		else
  	  		render  new_client_path 
			
		end
	end

	def show

		@user = current_user
		@wager = Wager.new
		@team_one
		@team_three
		@team_four
		@team_two
		@team_five
		@team_six
		@team_seven
		@team_eight
		@team_nine
		@spread_one
		@spread_two
		@bet_type
		@bet_amount
		@client
	
	end










	def client_params
 		params.require(:client).permit(:user_id, :first_name, :last_name, :bankroll, :style, :stakes)
 	end
end
