import { useState } from 'react';
import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import './index.css'
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';
import type { Gif } from './gifs/interfaces/gif.interface';

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const [gifs, setGifs] = useState<Gif[]>([]);

    const handleTermClicked = (term: string) => {}

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();

        if(query.length === 0) return;

        if(previousTerms.includes(query)) return;
        
        setPreviousTerms([query, ...previousTerms.slice(0,7)]);

        const gifs = await getGifsByQuery(query);

        setGifs(gifs);
        
    }


    return (
        <>
            {/* header */}
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el Gif perfecto'/>

            <SearchBar placeholder='Buscar gifs' onQuery={handleSearch}/>

            {/* Busquedas previas */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

            {/* gifs */}
            <GifList gifs={gifs}/>
        </>
    );
};
