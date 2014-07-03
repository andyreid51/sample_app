class Comment < ActiveRecord::Base
	has_many :containers

	validates :comment_description, presence: true
end
