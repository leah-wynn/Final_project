class AddUserIdToGhost < ActiveRecord::Migration[5.0]
  def change
    add_column :ghosts, :user_id, :integer
  end
end
