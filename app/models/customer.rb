class Customer < ActiveRecord::Base
	has_many :containers
	before_save { self.acc_code = acc_code.upcase }

	# Validation
	validates :acc_code, presence: true, length: {maximum: 10},
		uniqueness: { case_sensitive: false, message: "%{value} is already taken" }
	validates :acc_name, presence: true

end
