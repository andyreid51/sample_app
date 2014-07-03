class AddCommentDescriptionToComments < ActiveRecord::Migration
  def change
    add_column :comments, :comment_description, :string
  end
end
