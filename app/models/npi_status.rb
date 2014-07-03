class NpiStatus < ActiveRecord::Base
	has_many :containers

	# Validation
	validates :name, presence: true, length: {maximum: 50}
end
