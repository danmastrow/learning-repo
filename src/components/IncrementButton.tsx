import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, addCount } from '../store/reducers/CounterReducer';

export const IncrementButton = () => {
  const dispatch = useDispatch();

  const openIssueCount = useSelector((state: CounterState) => state.count);
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
