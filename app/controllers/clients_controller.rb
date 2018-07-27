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









	def client_params
 		params.require(:client).permit(:user_id, :first_name, :last_name, :bankroll, :style, :stakes)
 	end
end
