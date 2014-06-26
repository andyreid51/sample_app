class RemoveCommentsIdFromContainers < ActiveRecord::Migration
  def change
    remove_column :containers, :comments_id, :string
  end
end
