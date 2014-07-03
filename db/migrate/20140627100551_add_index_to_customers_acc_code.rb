class AddIndexToCustomersAccCode < ActiveRecord::Migration
  def change
  	add_index :customers, :acc_code, unique: true
  end
end
