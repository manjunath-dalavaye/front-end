// useSelector selects the counter state from the Redux store
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

//   useDispatch provides a dispatch function to send actions to the Redux store.

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
