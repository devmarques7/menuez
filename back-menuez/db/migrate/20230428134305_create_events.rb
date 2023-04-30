class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events, id: :uuid do |t|
      t.string :name
      t.string :location
      t.datetime :open_at
      t.datetime :close_at
      t.text :description
      t.datetime :date
      t.references :owner, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
