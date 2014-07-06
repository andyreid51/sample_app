class Contact < ActiveRecord::Base
	belongs_to :carrier
	before_save { self.first_name = first_name.capitalize }
	before_save { self.last_name = last_name.capitalize }
	before_save { self.email = email.downcase }

	#sort
	default_scope -> { order('last_name, first_name') }

	# Validation
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(?:\.[a-z\d\-]+)*\.[a-z]+\z/i
	validates :first_name, presence: true, length: {maximum: 50}
	validates :last_name, presence: true, length: {maximum: 50}
	validates :email, presence: true, format: {with: VALID_EMAIL_REGEX},
		uniqueness: { case_sensitive: false }
	validates :carrier_id, presence: true
	
end
