class AddStreetToLocations < ActiveRecord::Migration[5.0]
  def change
    add_column :locations, :street, :string
  end
end
