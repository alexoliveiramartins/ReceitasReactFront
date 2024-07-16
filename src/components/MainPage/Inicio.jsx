import { useState } from "react";
import { ReceitasMain } from "../Receitas/ReceitasMain";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultList";
import Tag from "./tags/TagSearchBar";

export function Inicio(){
    const [results, setResults] = useState([]);

    return (
        <>
        <h1 className="text-5xl flex flex-col justify-center items-center font-poppings">Montar Receita</h1>
        <Tag></Tag>

        <div className="flex flex-col items-center justify-center">
            <h1 className="p-6 font-poppings text-5xl mr-2">Pesquisar Receita</h1> 
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && <SearchResultsList results={results} />}
        </div>
        <div className="flex flex-col items-center">
            <h1 className="p-3 font-poppings text-5xl">Explorar Receitas</h1>
            <ReceitasMain />
        </div>
        </>
    )
}