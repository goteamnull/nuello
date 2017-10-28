class Api::CardsController < ApplicationController
  def show
    @card = Card.find(params[:id])
    render :show

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id provided"
    render 'api/shared/error', status: :not_found
  end

  def create
    @card = Card.new(card_params)
    @card.list_id = params[:list_id]

    if @card.save
      render :create, status: :created
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid card data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def card_params
    params.require(:card).permit(:title, :position)
  end
end
