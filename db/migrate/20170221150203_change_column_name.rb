class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
  	rename_column(:locations, :lat, :latitude)
    rename_column(:locations, :lng, :longitude)
  end
end
