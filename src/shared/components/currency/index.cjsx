React = require('react')
{ Component } = React

{ connect } = require('react-redux')

{ fetchDataCurrency } = require('./../../stores/actions/currency.cjsx')

HeaderCurrencyApp = require('./header.cjsx')

class CurrencyApp extends Component
  componentDidMount: ()->
    if @props.currency.items.length <= 0
      @props.fetchDataCurrency()
  render: ->
    <div>
      <HeaderCurrencyApp/>
      <ul>
        {
          if Object.keys(@props.currency.items).length > 0
            Object.keys(@props.currency.items).map((item, index)=>
              <li key={index}>{item}: {@props.currency.items[item]}</li>
            )
          else
            <div>no data found</div>
        }
      </ul>
    </div>

CurrencyApp.serverFetch = fetchDataCurrency

mapStateToProps = (state) =>
	currency: state.currency
mapDispatchToProps =
  {
    fetchDataCurrency
  }


module.exports = connect(mapStateToProps, mapDispatchToProps)(CurrencyApp)
