const React = require('react');

module.exports = 

    function Square(props) {
        
        return  <button className="square" onClick={() => props.onClick() }>
                    {props.title}
                </button>
    }
  