class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events, id: :uuid do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.datetime :open_at, null: false
      t.datetime :close_at, null: false
      t.text :description, null: false
      t.datetime :date, null: false
      t.string :img_cover_event
      t.string :category, null: false
      t.references :owner, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
