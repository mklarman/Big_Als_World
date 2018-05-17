class GamblersController < ApplicationController

	def index
		@users = User.all
	end
end
