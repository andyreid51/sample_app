class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :acc_code
      t.string :acc_name

      t.timestamps
    end
  end
end
