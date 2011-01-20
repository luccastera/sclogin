#!/usr/bin/env ruby

require 'rubygems'
require 'sinatra'
require 'json'

post '/login' do
  if rand > 0.5
    "ok"
  else
    [401, "Not Authorized\n"]
  end
end

after do
  puts response.status
end
