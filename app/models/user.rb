class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

	ROLES = %w[producer consumer admin].freeze

	class Producer < User
  # Things specific to an artist profile
	end

	class Consumer < User
	  # Things specific to a listener profile
	end

	class Admin < User
		
   end

end
