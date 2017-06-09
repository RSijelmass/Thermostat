require 'sinatra/base'
require 'json'

class WeatherApp < Sinatra::Base
	enable :sessions
	before do
		headers 'Access-Control-Allow-Origin' => '*'
	end

	get '/temperature' do
		data = File.open("weatherdata.json", "r")
		body data.to_json
	end

	post '/temperature/:temperature' do
		p "post: #{params[:temperature]}"
		data = File.open("weatherdata.json", "w+")
		data.write( {temperature: params[:temperature] }.to_json)
		data.close
	end

end
