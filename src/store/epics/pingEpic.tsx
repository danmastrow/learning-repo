import { ofType } from 'redux-observable';
import { mapTo } from 'rxjs/operators';
const pingEpic = (action$: any) =>
  action$.pipe(
    ofType('pingPong/ping'),
    // delay(1000), // Asynchronously wait 1000ms then continue
    mapTo('pingPong/pong')
  );

export default pingEpic;
