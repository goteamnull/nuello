class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)
    @list.board_id = params[:board_id]

    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      if (!Board.exists?(params[:board_id]))
        @error = 'invalid board id'
        render 'api/shared/error', status: :not_found
      elsif (!params[:list][:title])
        @error = 'cannot process list without title'
        render 'api/shared/error', status: :unprocessable_entity
      else
        @error = 'invalid list data provided'
        render 'api/shared/error', status: :unprocessable_entity
      end
    end

  end

  def list_params
    params.require(:list).permit(:title)
  end
end