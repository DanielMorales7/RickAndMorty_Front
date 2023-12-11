import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Layout/Header';
import { LayoutRM } from './components/LayoutRM';
import { getRickAndMorty } from './store/slices/thunks';
import { AnimacionRM } from './components/AnimacionRM';

export const GetRickAndMorty = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState(null);


  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.rickandmorty);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (submittedValue && submittedValue.trim().length > 1) {
          dispatch(getRickAndMorty(submittedValue));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch, submittedValue]);

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
  };

  return (
    <div className='container'>

      <Header />

      <form className='mb-5' onSubmit={(event) => onSubmit(event)}>

          <div className="row">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Escribe el personaje "
                value={inputValue}
                onChange={onInputChange}
              />
            </div>
            <div className="col-4">
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </div>
      </form>

      {submittedValue && !isLoading && <LayoutRM />}
      
      {error && <AnimacionRM/>}

      <div id="background-wrap">
          <div className="bubble x1"></div>
          <div className="bubble x2"></div>
          <div className="bubble x3"></div>
          <div className="bubble x4"></div>
          <div className="bubble x5"></div>
          <div className="bubble x6"></div>
          <div className="bubble x7"></div>
          <div className="bubble x8"></div>
          <div className="bubble x9"></div>
          <div className="bubble x10"></div>
      </div>
    </div>
  );
};
