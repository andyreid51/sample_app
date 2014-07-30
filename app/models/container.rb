class Container < ActiveRecord::Base
	belongs_to :carrier
	belongs_to :npi_status
	belongs_to :customer
	belongs_to :comment

	default_scope -> { order('date DESC') }

	# Validation
	VALID_CONTAINER_REGEX = /[A-Z]{4}[0-9]{7}/
	validates :container_number, presence: true, format: {with: VALID_CONTAINER_REGEX,
		message: "Valid container number is 4 alpha followed by 7 numeric. For example
		ABCD1234567"}, length: { maximum: 11 }
	validates :date, presence: true
	validates :bay, numericality: {only_integer: true, less_than_or_equal_to: 40}
	validates :carrier_id, presence: true
	validates :customer_id, presence: true
	

end
