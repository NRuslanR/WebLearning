const React = require('react');

class Item extends React.Component {

  constructor (props)
  {
    super(props);
  }

  render()
  {
    return <li><h3>{this.props.name}</h3></li>
  }
}

module.exports = Item;
