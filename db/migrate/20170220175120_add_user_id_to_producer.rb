class AddUserIdToProducer < ActiveRecord::Migration[5.0]
  def change
    add_column :producers, :user_id, :integer
  end
end
