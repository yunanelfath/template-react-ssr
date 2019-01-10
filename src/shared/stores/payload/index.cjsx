redux = require('redux')

# thunk middleware use for parsing dispatch() function from component into action && combine with redux.applyMiddleware
thunkMiddleware = require('redux-thunk').default

pages = require('./../reducers/pages.cjsx')
currency = require('./../reducers/currency.cjsx')

createStore = ( initialState ) =>
  redux.createStore(redux.combineReducers({pages,currency}), initialState, redux.applyMiddleware(thunkMiddleware))
module.exports = createStore
