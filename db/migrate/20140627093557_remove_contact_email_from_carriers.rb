class RemoveContactEmailFromCarriers < ActiveRecord::Migration
  def change
    remove_column :carriers, :contact_email, :string
  end
end
