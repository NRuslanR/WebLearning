const React = require('react');

class TextFilter extends React.Component
{
  constructor (props)
  {
    super(props);

    this.onTextChanged = this.onTextChanged.bind(this);
    this.setEnabled = this.setEnabled.bind(this);
  }

  onTextChanged(e)
  {
    var text = e.target.value.trim();

    this.props.filter(text);
  }

  render()
  {
    return <div>
              <input
                id="search"
                placeholder={this.props.placeholder}
                onChange={this.onTextChanged}
              />
              <input type="checkbox" checked={true}
                onChange={this.onSearchActiveChanged}
              />
           </div>;
  }

  onSearchActiveChanged(e) {

    document.getElementById('search').disable = !e.target.checked;
    //this.setEnabled(e.target.checked);

  }

  setEnabled(enabled)
  {
    document.getElementById('search').disable = !enabled;
  }

}

TextFilter.defaultProps = { placeholder: "Search" };

module.exports = TextFilter;
