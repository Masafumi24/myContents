class FeelingsController < ApplicationController
  def index
    @feelings = Feeling.all
    @feeling = Feeling.new
  end

  def create
    @feeling = Feeling.new(feelings_params)
    @feeling.save
  end

  def show
  end

  private

  def feelings_params
    params.require(:feeling).permit(:feeling_name)
  end

end
