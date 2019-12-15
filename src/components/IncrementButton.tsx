import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, CounterState } from '../store/reducers/CounterReducer';

export const IncrementButton = () => {
  const dispatch = useDispatch();

  const openIssueCount = useSelector(
    (state: { counterReducer: CounterState }) => state.counterReducer.count
  );
  return (
    <div>
      <button
        onClick={() => {
          dispatch(addCount(5));
        }}
      >
        {openIssueCount}
      </button>
    </div>
  );
};
