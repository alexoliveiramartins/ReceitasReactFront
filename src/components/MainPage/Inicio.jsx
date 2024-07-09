import SearchBar from "./SearchBar";
import Tag from "./tags/Tag";

export function Inicio(){
    return (
        <>
        <div className="flex flex-col items-center justify-center">
            <h1 className="p-6 font-poppings text-5xl mr-2">Nova Receita</h1> 
            <SearchBar />
            <Tag tagName="alex"/>
        </div>
        </>
    )
}