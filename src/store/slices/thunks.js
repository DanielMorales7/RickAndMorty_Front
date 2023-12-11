
import clienteAxios from "../../config/axios";
import { setRM, starLoadingRM, setError } from "./rickandmorty"

export const getRickAndMorty = (submittedValue) => {

  return async (dispatch, getState) => {
    dispatch(starLoadingRM());

    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/?nombre=${submittedValue}`;
      const { data } = await clienteAxios.get(url);
      dispatch(setRM({ rm: data }));

    } catch (error) {
        const invalid = true;
      // Manejar errores aquí
      dispatch(setError({ error: error.message }));
    }
  };
}
