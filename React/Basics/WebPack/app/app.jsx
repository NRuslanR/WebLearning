const ReactDOM = require('react-dom'),
      React = require('react'),
      ItemList = require('./components/itemList.jsx');

const itemListViewModel =
  {
    title: 'Departments',
    items: [
      "Manufactoring",
      "Sales",
      "Marketing",
      "Human Resources",
      "Finances",
      "Delivery",
      "Technical Support"
    ]
  };

ReactDOM.render(
  <ItemList data={itemListViewModel} />,
  document.getElementById('app')
);
