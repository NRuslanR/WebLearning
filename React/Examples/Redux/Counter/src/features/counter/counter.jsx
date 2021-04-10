const React  = require('react'),
      useState = React.useState,
      { useSelector, useDispatch } = require('react-redux'),
      {
          increment,
          decrement,
          incrementByAmount,
          incrementByAmountAsync,
          selectCount
      } = require('./counterSlice.js');

function Counter()
    {
        const count = useSelector(selectCount);
        const dispatch = useDispatch();
        const [ incrementAmount, setIncrementAmount ] = useState('2');

        return  <div>
                    <div>
                        <button 
                            onClick={() => dispatch(increment())}
                        >
                            +
                        </button>
                        <span>{count}</span>
                        <button
                            onClick={() => dispatch(decrement())}
                        >
                            -
                        </button>
                    </div>
                    <div>
                        <input 
                            type="number" 
                            min="2" 
                            value={incrementAmount}
                            onChange={(e) => setIncrementAmount(e.target.value)}
                        />
                        <button
                            onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0)) }
                        >
                            Add Amount
                        </button>
                        <button
                           onClick={() => dispatch(incrementByAmountAsync(Number(incrementAmount) || 0)) } 
                        >
                            Add Amount Async
                        </button>
                    </div>
                </div>
    }

module.exports = Counter;