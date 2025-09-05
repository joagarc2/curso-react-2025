import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import './index.css'
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {

    const {previousTerms, gifs, handleSearch, handleTermClicked} = useGifs();

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
