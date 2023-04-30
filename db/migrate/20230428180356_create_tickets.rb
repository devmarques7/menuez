class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets,id: :uuid do |t|
      t.string :ticket_type
      t.boolean :available
      t.datetime :expired_at
      t.references :event, null: false, foreign_key: true, type: :uuid
      t.references :user, null: true, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
