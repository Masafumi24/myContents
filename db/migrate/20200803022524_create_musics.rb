class CreateMusics < ActiveRecord::Migration[5.2]
  def change
    create_table :musics do |t|
      t.string :name
      t.string :artist_name
      t.text :impression
      t.string :image
      t.references :feeling, foreign_key: true
      t.timestamps
    end
  end
end
