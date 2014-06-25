class CreateNpiStatuses < ActiveRecord::Migration
  def change
    create_table :npi_statuses do |t|
      t.string :name

      t.timestamps
    end
  end
end
