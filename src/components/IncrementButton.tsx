import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { ping } from '../store/reducers/PingPongReducer';

export const IncrementButton = () => {
  const dispatch = useDispatch();

  // const openIssueCount = useSelector((state: RootState) => state.counter.count);
  return (
    <div>
      <Button
        onClick={() => {
          dispatch(ping());
        }}
      >
        Ping
      </Button>
    </div>
  );
};
