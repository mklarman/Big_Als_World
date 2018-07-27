class CreateWagers < ActiveRecord::Migration[5.1]
  def change
    create_table :wagers do |t|

    	t.string :client_id
    	t.string :bet_type
    	t.integer :bet_amount
    	t.string :team_one
    	t.integer :spread_one
    	t.string :team_two
    	t.integer :spread_two

      t.timestamps
    end
  end
end
