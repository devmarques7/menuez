class StoreController < ApplicationController

  
  def index
    @owners = Owner.all
    @events = Event.all

    render json: { owners: @owners, events: @events }
  end

  # GET /store/events/:id
  def events
    @owners = Owner.find(params[:id])
    @events = @owners.events
    render json: @events
  end

  def get_owner_with_events
  owner_id = params[:id]
  owner = Owner.find(owner_id)
  events = Event.where(owner_id: owner_id)

  render json: { owner: owner, events: events }
end

end
