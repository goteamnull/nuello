class Api::BoardsController < ApplicationController
  def index
    @boards = Board.all
    render :index
  end

  def show
    # make JJS smile
    # make JJS smile
    # make JJS smile
    # make JJS smile
    # TODO delete above lines at some point in the future
    @board = Board.find(params[:id])
    
    render :show
  end

  def create
    @board = Board.new(board_params)

    if @board.save
      render :create, status: :created
    else
      @error = @board.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid board data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end


  private

  def board_params
    params.require(:board).permit(:title)
  end
end
