class CreateDramas < ActiveRecord::Migration[5.2]
  def change
    create_table :dramas do |t|
      t.string :title
      t.text :impression
      t.string :image
      t.references :feeling, foreign_key: true
      t.timestamps
    end
  end
end
