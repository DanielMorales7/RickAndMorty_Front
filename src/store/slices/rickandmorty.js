import { createSlice } from '@reduxjs/toolkit';

export const rickandmortySlice = createSlice({
    name: 'rickandmorty',
    initialState: {
      isLoading: false,
      rm: [],
      error: null, // Aquí inicializamos error como null
    },
    reducers: {
      starLoadingRM: (state) => {
        state.isLoading = true;
        state.error = null; // Al comenzar la carga, reseteamos el error a null
      },
      setRM: (state, action) => {
        state.isLoading = false;
        state.rm = action.payload.rm;
        state.error = null; // Cuando se establece la información correctamente, reseteamos el error a null
      },
      setError: (state, action) => {
        state.isLoading = false;
        state.rm = [];
        state.error = action.payload.error;
      },
    },
  });


// Action creators are generated for each case reducer function
export const { starLoadingRM, setRM, setError } = rickandmortySlice.actions;