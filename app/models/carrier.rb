class Carrier < ActiveRecord::Base
	has_many containers
	has_many contacts
end
