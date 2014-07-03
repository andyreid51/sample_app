class Carrier < ActiveRecord::Base
	has_many :containers
	has_many :contacts, dependent: :destroy

	# Validation
	validates :name, presence: true, length: {maximum: 50}
	
end
