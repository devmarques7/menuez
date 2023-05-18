class Ticket < ApplicationRecord
  belongs_to :event
  belongs_to :user, optional: true

  after_create :update_event_sold_out_status

  private

  def update_event_sold_out_status
    event.update(sold_out: false)
  end
end
