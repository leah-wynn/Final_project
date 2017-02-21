class Ghost < ApplicationRecord
	belongs_to :location
	has_many :categories
	has_one :user
end
