import { ofType } from "redux-observable";
import { map, mergeMap, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import {
  getFilms,
  getFilmsSuccess,
  getFilmsFailure,
  Film
} from "../reducers/FilmsReducer";
import { of } from "rxjs";

const filmsEpic = (action$: any) =>
  action$.pipe(
    ofType(getFilms),
    mergeMap(() =>
      ajax.getJSON(`https://swapi.co/api/films/?format=json`).pipe(
        map((response: any) => {
          return getFilmsSuccess(response.results as Film[]);
        }),
        catchError(error => of(getFilmsFailure()))
        // Here we placed the catchError() inside our mergeMap(), but after our AJAX call;
        // this is important because if we let the error reach the action$.pipe(),
        // it will terminate it and no longer listen for new actions.
      )
    )
  );

export default filmsEpic;
