class CreateFeelings < ActiveRecord::Migration[5.2]
  def change
    create_table :feelings do |t|
      t.string :feeling_name
      t.timestamps
    end
  end
end
