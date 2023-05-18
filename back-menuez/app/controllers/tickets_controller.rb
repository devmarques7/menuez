class TicketsController < ApplicationController
  before_action :set_ticket, only: %i[ show update destroy ]

  # GET /tickets
  def index
    @tickets = Ticket.all

    render json: @tickets.as_json(include: { event: { only: [:id, :name, :location, :description, :close_at,:open_at,:date] } })
  end

  # GET /tickets/1
  def show
    render json: @ticket
  end

  # POST /tickets
  def create
    @ticket = Ticket.new(ticket_params)

    if @ticket.save
      render json: @ticket, status: :created, location: @ticket
    else
      render json: @ticket.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tickets/1
  def update
    params.require(:ticket).permit(:ticket_type, :available, :expired_at, :event_id, :user_id)
    if @ticket.update(ticket_params)
      render json: @ticket
    else
      render json: @ticket.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tickets/1
  def destroy
    @ticket.destroy
  end


  def events_inform
    event_id = params[:id]
    @event = Event.find(event_id)
  
    if @event.save
      render json: @event.as_json(include: { owner: { only: [:id, :name, :email] }, tickets: { only: [:event_id, :ticket_type, :user_id, :available, :expired_at] } })
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  def ticktes_category
    ticket_type = params[:type]
    @tickets = Ticket.where(ticket_type: ticket_type)

    return render json:  @tickets.as_json(include: :event)
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ticket
      @ticket = Ticket.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ticket_params
      params.require(:ticket).permit(:event_id, :ticket_type, :user_id, :available, :expired_at)
    end
end
