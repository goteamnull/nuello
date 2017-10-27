class Api::CardsController < ApplicationController
  def show
    @card = Card.find(params[:id])
    render :show

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id provided"
    render 'api/shared/error', status: :not_found
  end
end
