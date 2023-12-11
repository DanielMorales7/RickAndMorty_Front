import { CardsRM } from './CardsRM';
import '../css/LayoutRM.css';
import { PaginacionRM } from './PaginacionRM';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const LayoutRM = () => {

    const { rm } = useSelector((state) => state.rickandmorty);

    if (!rm || !rm.characters) {
        return null;
    }

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = rm.characters.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className='row'>
                    {currentItems.map((character) => (
                        <CardsRM key={character.id} character={character} />
                    ))}
            </div>

            <div className="d-flex justify-content-center mt-3">
                <PaginacionRM
                    itemsPerPage={itemsPerPage}
                    totalItems={rm.characters.length}
                    paginate={paginate}
                />
            </div>
        </>
    );
};
