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
    @card.board_id = params[:board_id]

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

  def update
    unless update_card_params_valid?
      @error = 'at least one allowed attribute must be included'
      render 'api/shared/error', status: :unprocessable_entity
      return
    end

    @card = Card.find(params[:id])

    if @card.update_attributes(update_card_params)
      render :update, status: :ok
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id provided"
    render 'api/shared/error', status: :not_found
  rescue ActionController::ParameterMissing
    @error = "JSON must have a non-empty card attribute"
    render 'api/shared/error', status: :bad_request
  end

  private

  def card_params
    params.require(:card).permit(:title, :position)
  end

  def update_card_params
    params.require(:card).permit(*Card.updatableAttributes)
  end

  def update_card_params_valid?
    update_card_params.as_json.any? do |k, _|
      Card.updatableAttributes.include?(k.to_sym)
    end
  end
end
