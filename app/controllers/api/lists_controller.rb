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

  def update
    if !params[:title] && !params[:position]
      @error = 'require title or position'
      render 'api/shared/error', status: :unprocessable_entity
      return
    end

    @list = List.find(params[:id])

    if params[:title]
      @list.title = params[:title]
    end

    if params[:position]
      @list.position = params[:position]
    end

    if @list.save
      render :update, status: :ok
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid list id provided"
    render 'api/shared/error', status: :not_found
  end

  def list_params
    params.require(:list).permit(:title)
  end
end