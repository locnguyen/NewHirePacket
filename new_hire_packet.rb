require 'sinatra/base'

class NewHirePacket < Sinatra::Base
  get '/' do
    erb :index
  end
end