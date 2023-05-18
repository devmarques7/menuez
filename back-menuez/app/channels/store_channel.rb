class StoreChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "StoreChannel"
  end

  def receive(data)
    ActionCable.server.broadcast("StoreChannel", data)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end


  def events
    @events =  Event.all
    ActionCable.server.broadcast('StoreChannel',  @events.as_json )
  end
end
