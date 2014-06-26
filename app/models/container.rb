class Container < ActiveRecord::Base
	belongs_to :carrier
	belongs_to :npi_status
	belongs_to :customer
	belongs_to :comment
end
