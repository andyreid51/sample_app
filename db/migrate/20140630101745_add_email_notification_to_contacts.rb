class AddEmailNotificationToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :email_notification, :boolean
  end
end
