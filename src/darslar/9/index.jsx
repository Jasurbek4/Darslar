import React, {useState, useReducer} from "react";

export const Hooks = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("webbrain");
    const [counter, dispatch] = useReducer((state, action) => {
        switch(action.type){
            case 'plus':
                return state + 1;
            case 'minus':
                return state - 1;
            case 'five':
                return state + 5;
            case 'twenty':
                return state + 20;
            default:
                return state;
        }
    }, 0)
    return (
        <div>
        <h1>Hooks Components</h1>
        {/* <h1>Count: {count}</h1> */}
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch({type: 'plus'})}>+</button>
        <button onClick={() => dispatch({type: 'minus'})}>-</button>
        <button onClick={() => dispatch({type: 'five', payload: 5})}>5</button>
        <button onClick={() => dispatch({type: 'twenty', payload: 20})}>20</button>

        </div>
    )
}