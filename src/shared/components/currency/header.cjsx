React = require('react')
{ Component } = React

{ connect } = require('react-redux')

class Header extends Component
  componentDidMount: ()->
  render: ->
    <div>
      ini adalah header nya yaa cuy
    </div>

mapStateToProps = (state) =>
	currency: state.currency


module.exports = connect(mapStateToProps)(Header)
