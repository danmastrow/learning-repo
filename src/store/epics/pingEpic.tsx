import { ofType } from "redux-observable";
import { map, delay } from "rxjs/operators";
import { ping, pong } from "../reducers/PingPongReducer";
const pingEpic = (action$: any) =>
  action$.pipe(
    ofType(ping),
    delay(1000),
    map(() => pong())
  );

export default pingEpic;
