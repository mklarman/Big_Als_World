class CreateClients < ActiveRecord::Migration[5.1]
  def change
    create_table :clients do |t|

    	t.string :user_id
    	t.string :first_name
    	t.string :last_name
    	t.integer :bankroll
    	t.string :style
    	t.string :stakes
    	

      t.timestamps
    end
  end
end
