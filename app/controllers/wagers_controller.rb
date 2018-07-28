class WagersController < ApplicationController

	def new
		@wager = Wager.new
		@user = current_user
	end

	def create







	def wager_params
 		params.require(:wager).permit(:client_id, :bet_type, :bet_amount, :team_one, :spread_one, :team_two, :spread_two)
 	end
end
