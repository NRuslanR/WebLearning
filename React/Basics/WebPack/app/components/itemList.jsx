const React = require('react'),
      Item = require('./item.jsx'),
      TextFilter = require('./textFilter.jsx');

class ItemList extends React.Component
{
  constructor (props)
  {
    super(props);

    this.state = { items: this.props.data.items };

    this.filter = this.filter.bind(this);
  }

  filter(text) {

    var filteredItems =
      this.props.data.items.filter(
        item => item.toLowerCase().search(text) !== -1
      );

    this.setState({ items: filteredItems });

  }

  render()
  {
    return <div>
              <h2>{this.props.data.title}</h2>
              <TextFilter placeholder="Поиск" filter={this.filter} />
              <ul>
                {
                  this.state.items.map(
                    item => <Item name={item} />
                  )
                }
              </ul>
           </div>
  }
}

module.exports = ItemList;
