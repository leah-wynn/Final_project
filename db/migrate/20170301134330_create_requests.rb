class CreateRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :requests do |t|
      t.string :address
      t.string :city
      t.string :state
      t.string :street
      t.integer :category_id
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
