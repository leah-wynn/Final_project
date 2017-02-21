class CreateGhosts < ActiveRecord::Migration[5.0]
  def change
    create_table :ghosts do |t|
      t.string :name
      t.text :discription
      t.integer :category_id
      t.integer :location_id

      t.timestamps
    end
  end
end
