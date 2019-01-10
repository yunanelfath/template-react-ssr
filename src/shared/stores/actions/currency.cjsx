ApiRequests = require('../../api-request.cjsx')
ApiRequests = new ApiRequests()
{ getLatestExchange } = ApiRequests

module.exports.fetchDataCurrency = (param1) => ( dispatch ) =>
  console.log getLatestExchange
  data = {}
  data['base'] = 'USD'

  getLatestExchange(data).then(([response, json])=>
    [response,json]
  ).then(([response, json])=>
    console.log json
    dispatch(type: 'ASSIGN_CURRENCY', data: {items: json.rates})
  )
