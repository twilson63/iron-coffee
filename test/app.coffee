require './app'
request = require 'request'

describe 'app', ->
  it 'should respond to root', (done) ->
    request.get 'http://localhost:3000/', (e, b, r) ->
      console.log b
      done()