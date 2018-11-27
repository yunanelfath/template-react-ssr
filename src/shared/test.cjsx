React = require('react')
{ Component } = React

ReactRedux = require('react-redux')
{ connect } = ReactRedux

class TestApp extends Component
  render: ->
    <div>
      <h1>well done testapp</h1>
    </div>

mapStateToProps = (state) =>
	pages: state?.pages
mapDispatchToProps = (dispatch, state) =>
	{}

module.exports = connect(mapStateToProps, mapDispatchToProps)(TestApp)
