class FeelingsController < ApplicationController
  def index
    @feelings = Feeling.all
    @feeling = Feeling.new
  end

  def show
  end
end
