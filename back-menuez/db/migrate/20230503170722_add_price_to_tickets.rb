class AddPriceToTickets < ActiveRecord::Migration[7.0]
  def change
    add_column :tickets, :price, :float, default: 0.0
  end
end
