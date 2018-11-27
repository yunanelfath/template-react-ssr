redux = require('redux')

pages = require('./../reducers/pages.cjsx')

store = redux.createStore(redux.combineReducers({pages}))
module.exports = store
