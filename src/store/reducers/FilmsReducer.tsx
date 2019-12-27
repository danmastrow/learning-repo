import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilmsState {
  films: Film[];
  loading: boolean;
  errored: boolean;
}

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
}
const initialState: FilmsState = {
  films: [],
  loading: false,
  errored: false
};
const films = createSlice({
  name: "films",
  initialState: initialState,
  reducers: {
    getFilms(state: FilmsState) {
      state.loading = true;
      state.films = [];
    },
    getFilmsSuccess(state: FilmsState, action: PayloadAction<Film[]>) {
      state.errored = false;

      state.loading = false;
      state.films = action.payload;
    },
    getFilmsFailure(state: FilmsState) {
      state.errored = true;
      state.loading = false;
    }
  }
});
export const { getFilms, getFilmsSuccess, getFilmsFailure } = films.actions;
export default films.reducer;
