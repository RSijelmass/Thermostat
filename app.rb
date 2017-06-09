require 'sinatra/base'
require 'json'

class WeatherApp < Sinatra::Base
	enable :sessions
	before do
		headers 'Access-Control-Allow-Origin' => '*'
	end

	get '/temperature' do
		content_type :json
		data = File.read(File.open("weatherdata.json", "r"))
		body data
	end

	post '/temperature/:temperature/:city' do
		p "post: #{params[:temperature]}"
		data = File.open("weatherdata.json", "w+")
		data.write( {temperature: params[:temperature], city: params[:city]}.to_json)
		data.close
	end

end
