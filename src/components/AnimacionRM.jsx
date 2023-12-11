import { useSelector } from 'react-redux'
import '../css/animacion.css'
import { useEffect } from 'react';

export const AnimacionRM = () => {

    const { error } = useSelector((state) => state.rickandmorty);

    if (!error ) {
        return null;
    }

    useEffect(() => {

    }, [error])
    

    return (
        <>

            {
                error
                ?
                <div className="container mt-5">
                    <div className="alert alert-warning" role="alert">
                    El personaje que buscas no está en esta dimensión.
                    </div>
                </div> 
                :
                ''
            }
        </>
    )
}
