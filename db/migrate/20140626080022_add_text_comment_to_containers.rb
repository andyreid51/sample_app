class AddTextCommentToContainers < ActiveRecord::Migration
  def change
    add_column :containers, :text_comment, :string
  end
end
