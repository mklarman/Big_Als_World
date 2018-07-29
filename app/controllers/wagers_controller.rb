class WagersController < ApplicationController

	def new
		@wager = Wager.new
		@user = current_user
	end

	def create

		user = current_user
		wager = Wager.new(wager_params)
		@client
		
		if wager.save
			
			redirect_to new_client_path
  		else
  	  		render new_user_registration_path

  	  	end 
			
	end

	def show

		@wager = Wager.find_by_id(parmas[:id])






	end







	def wager_params
 		params.require(:wager).permit(:client_id, :bet_type, :bet_amount, :team_one, :spread_one, :team_two, :spread_two)
 	end
end
