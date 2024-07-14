import { ReceitasMain } from "../Receitas/ReceitasMain";
import SearchBar from "./SearchBar";
import Tag from "./tags/Tags";

export function Inicio(){
    return (
        <>
        <div className="flex flex-col items-center justify-center">
            <h1 className="p-6 font-poppings text-5xl mr-2">Pesquisar Receita</h1> 
            <SearchBar />
            <Tag tagName="alex"/>
        </div>
        <div className="flex flex-col items-center">
            <h1 className="p-3 font-poppings text-5xl">Explorar Receitas</h1>
            <ReceitasMain />
        </div>
        </>
    )
}