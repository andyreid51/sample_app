class AddCommentIdToContainers < ActiveRecord::Migration
  def change
    add_column :containers, :comment_id, :integer
  end
end
