class Container < ActiveRecord::Base
	belongs_to :carrier
	belongs_to :npi_status
	belongs_to :customer
	belongs_to :comment

	# Validation
	VALID_CONTAINER_REGEX = ((?:[a-zA-Z0-9]{4}|/{4})[a-zA-Z0-9]{7})
	validates :container_number, presence: true, format: {with: VALID_CONTAINER_REGEX},
	validates :date, presence: true
	validates :bay, numericality: {only_integer: true, less_than_or_equal_to: 40}
	validates :carrier_id, presence: true
	validates :cusomer_id, presence: true
	

end
