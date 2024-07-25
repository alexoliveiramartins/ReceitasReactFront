import { ReceitasMain } from "../Receitas/ReceitasMain";
import Tag from "./tags/TagSearchBar";

export function Inicio(){

    return (
        <>
        <h1 className="text-5xl flex flex-col justify-center items-center font-poppings">Explorar Receitas</h1>
        <Tag></Tag>
        <div className="flex flex-col items-center">
            <h1 className="p-3 font-poppings text-5xl">Explorar Receitas</h1>
            <ReceitasMain />
        </div>
        </>
    )
}