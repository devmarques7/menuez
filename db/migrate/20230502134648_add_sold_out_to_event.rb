class AddSoldOutToEvent < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :sold_out, :boolean, default: true
  end
end
