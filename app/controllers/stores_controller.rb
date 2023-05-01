class StoresController < ApplicationController
  before_action :set_store, only: %i[ show update destroy ]

  # GET /stores
  def index
    @stores = Store.all

    render json: @stores
  end

  # GET /stores/1
  def show
    render json: @store
  end

  # POST /stores
  def create
    @store = Store.new(store_params)

    if @store.save
      render json: @store, status: :created, location: @store
    else
      render json: @store.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stores/1
  def update
    if @store.update(store_params)
      render json: @store
    else
      render json: @store.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stores/1
  def destroy
    @store.destroy
  end

  def get_owner_with_events
    owner_id = params[:id]
    owner = Owner.find(owner_id)
    events = Event.where(owner_id: owner_id)
  
    render json: { owner: owner, events: events }
  end


  def events_inform
    event_id = params[:id]
    @event = Event.find(event_id)
  
    if @event.save
      render json: @event.as_json(include: { owner: { only: [:id, :name, :email] }, tickets: { only: [:id, :ticket_type, :available] } })
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_store
      @store = Store.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def store_params
      params.require(:store).permit(:body)
    end


end
