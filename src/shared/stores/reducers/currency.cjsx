initialState = {
  currency:
    items: []
    base: 'USD'
}

currency = (state = initialState.currency, action) =>
  switch action.type
    when 'LOAD_CURRENCY'
      action.data
    when 'ASSIGN_CURRENCY'
      Object.assign({}, state, action.data)
    else
      state
module.exports = currency
