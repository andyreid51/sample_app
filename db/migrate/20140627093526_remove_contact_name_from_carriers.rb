class RemoveContactNameFromCarriers < ActiveRecord::Migration
  def change
    remove_column :carriers, :contact_name, :string
  end
end
