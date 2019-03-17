class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:destroy]
  
  def index
    render json: Item.all.order(:created_at)
  end

  # def show
    # render json: item
  # end

  def create
    item = Item.new(item_params)

    if item.save
      render json: item
    else
      render json: {errors: item.errors}, status: 422
    end
  end

  def update
     item = Item.find(params[:id])
     item.update(complete: !item.complete)
      render json: item
  end

  def destroy
    @item.destroy
  end

  private

    def set_item
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :complete)
    end
end
