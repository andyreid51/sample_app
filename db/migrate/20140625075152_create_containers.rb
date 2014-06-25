class CreateContainers < ActiveRecord::Migration
  def change
    create_table :containers do |t|
      t.string :container_number
      t.datetime :date
      t.integer :bay
      t.string :door_orientation
      t.integer :carrier_id
      t.boolean :do_received
      t.string :entry_number
      t.string :ship_voyage
      t.integer :npi_status_id
      t.boolean :config_received
      t.string :priority
      t.datetime :doc_date
      t.integer :customer_id
      t.datetime :devan_date
      t.boolean :mt_email_sent
      t.integer :comments_id

      t.timestamps
    end
  end
end
