import React, {useState, useReducer, useMemo, useCallback } from 'react'

const initialState = 0

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
};

const ClickCounterClosure = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [messageId, setMessageId] = useState('');

    const generateMessageId = useCallback(() => {
        let currentId = 0
        return () => {
            currentId++;
            return `msg_${currentId}`
        }
    }, []);

    const generateIdClosure = useMemo(generateMessageId, []);

    const handleClick = (actionType) => {
        dispatch({ type: actionType });
        setMessageId(generateIdClosure())
    }

    return (
        <>
            <div>
                <p>Count is {state} & Message Id is {messageId}</p>
                <button onClick={() => handleClick('increment')}>Increment</button>
                <button onClick={() => handleClick('decrement')}>Decrement</button>
                <button onClick={() => handleClick('reset')}>Reset</button>
            </div>
        </>
    )
}

export default ClickCounterClosure