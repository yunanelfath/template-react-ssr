fetch = require("isomorphic-fetch")
class ApiRequests
  getLatestExchange: (data) =>
    fetch("https://api.exchangeratesapi.io/latest?base=#{data.base}",
      { method: "GET" }
    ).then((response) =>
      Promise.all([response, response.json()])
    ).catch((response) =>
      data = [{status: 500}, response.toString()]
    )

module.exports = ApiRequests
