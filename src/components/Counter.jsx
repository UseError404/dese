import React from 'react';

function Counter() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

export default Counter;