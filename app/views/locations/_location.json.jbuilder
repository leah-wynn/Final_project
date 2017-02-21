json.extract! location, :id, :address, :city, :lat, :lng, :created_at, :updated_at
json.url location_url(location, format: :json)