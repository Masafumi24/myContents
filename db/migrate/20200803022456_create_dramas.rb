class CreateDramas < ActiveRecord::Migration[5.2]
  def change
    create_table :dramas do |t|

      t.timestamps
    end
  end
end
