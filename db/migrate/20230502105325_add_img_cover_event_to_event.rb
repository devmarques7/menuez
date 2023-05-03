class AddImgCoverEventToEvent < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :img_cover_event, :string
  end
end
