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

  def speak(data)
    ActionCable.server.broadcast 'test_channel', message: data['message']
  end

  def hello
    puts "Received hello from front-end!"
    ActionCable.server.broadcast('StoreChannel', { message: 'Hello from the back-end!' })
    unsubscribe
  end

  def events
    puts "Received from front-end!"

    @events =  Event.all
    @events = Event.select(:id, :name, :description)

    event = render json: @events

    puts "Retrieved #{@events.size} events from database"

 

    ActionCable.server.broadcast('StoreChannel',  { events: @events } )
  end
end
