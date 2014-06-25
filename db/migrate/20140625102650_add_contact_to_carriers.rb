class AddContactToCarriers < ActiveRecord::Migration
  def change
    add_column :carriers, :contact_name, :string
    add_column :carriers, :contact_email, :string
  end
end
