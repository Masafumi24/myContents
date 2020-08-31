class FeelingsController < ApplicationController
  
  def index
    @feelings = Feeling.all
    @feeling = Feeling.new
  end

  def create
    @feeling = Feeling.new(feelings_params)
    @feeling.save
    respond_to do |format|
      format.json
      format.html { redirect_to "/" }
    end
  end

  private

  def feelings_params
    params.require(:feeling).permit(:feeling_name)
  end

end
