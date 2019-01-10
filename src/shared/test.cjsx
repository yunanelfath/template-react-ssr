React = require('react')
{ Component } = React

ReactRedux = require('react-redux')
{ connect } = ReactRedux

pages = require('./stores/actions/pages.cjsx')
{ setForexDataToPage } = pages

class TestApp extends Component
  componentDidMount: ()->
    @props.setForexDataToPage("parameter test")
  render: ->
    console.log @props.pages.activePage
    <div>
      <h1>well done testapp</h1>
    </div>

mapStateToProps = (state) =>
	pages: state?.pages
mapDispatchToProps =
  {
    setForexDataToPage
  }


module.exports = connect(mapStateToProps, mapDispatchToProps)(TestApp)
