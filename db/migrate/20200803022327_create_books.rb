class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.text :impression
      t.string :image
      t.references :feeling, foreign_key: true
      t.timestamps
    end
  end
end
