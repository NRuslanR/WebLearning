const React = require('react'),
      ReactDOM = require('react-dom'),
      FilterableTodoItemList = require('./filterableTodoItemList.jsx');

let todoItems = [
    { id: 1, name: "Item 1", priority: 5, isCompleted: false },
    { id: 2, name: "Item 2", priority: 2, isCompleted: true },
    { id: 3, name: "Item 25", priority: 7, isCompleted: false },
    { id: 4, name: "Item 12", priority: 4, isCompleted: true },
    { id: 5, name: "Item 3", priority: 3, isCompleted: true }
];

ReactDOM.render(
    <FilterableTodoItemList todoItems={todoItems}/>,
    document.getElementById('app')
);