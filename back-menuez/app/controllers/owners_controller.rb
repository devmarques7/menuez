class OwnersController < ApplicationController
  before_action :set_owner, only: %i[ show update destroy ]

  # GET /owners
  def index
    @owners = Owner.all

    render json: @owners
  end

  # GET /owners/1
  def show
    render json: @owner
  end

  # POST /owners
  def create
    puts owner_params[:name]
    @owner = Owner.new(owner_params)

    if @owner.save
      render json: @owner, status: :created, location: @owner
    else
      render json: @owner.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /owners/1
  def update
    if @owner.update(owner_params)
      render json: @owner
    else
      render json: @owner.errors, status: :unprocessable_entity
    end
  end

  # DELETE /owners/1
  def destroy
    @owner.destroy
  end

  def owners_inform
    owner_id = params[:id]
    @owner = Owner.find(owner_id)
  
    if @owner.save
      render json: @owner.as_json(include: { events: { only: [:id, :name, :location, :description, :close_at,:open_at,:date] } })
    else
      render json: @owner.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_owner
      @owner = Owner.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def owner_params
      params.require(:owner).permit(:name, :email, :password)
    end
end