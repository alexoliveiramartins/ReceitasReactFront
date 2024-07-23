import { useState, useEffect } from "react";
import { fetchRecipes } from "../../fetchRecipe";
import { useParams } from "react-router-dom";
import "./ReceitasPage.css";


export default function ReceitasPage(){
    const { nome } = useParams();
    const [receita, setReceita] = useState(null);

    const api = `${import.meta.env.VITE_API_KEY}/${nome}`
    useEffect(() => {
        async function loadProduct(){
            try {
                if(nome) {
                    const result = await fetchRecipes(api);
                    if(result){
                        setReceita(result);
                    }
                }
            }
            catch (error) {
                console.error(error);
            }
        }

        loadProduct();
    }, [nome])

    if(!receita){
        return <p>Carregando receita...</p>;
    }
    
    return (
        <>
            <div className="TUDO flex flex-col items-center justify-center font-poppings">
                <div className="TITULO-E-BANDEIRA flex flex-row items-center space-x-2 py-1">
                    <h1 className="text-4xl">{receita.nome}</h1>
                    <img className="size-9" src={`https://flagsapi.com/${receita.origem}/shiny/64.png`} />
                </div>
                <h1 className="CATEGORIA font-light py-1">{receita.categoria}</h1>
                
                <div className="IMAGEM-E-INSTRUCOES w-3/5 flex flex-row space-x-6 px-5 py-4">
                    <figure className="IMAGEM w-96 h-64 flex-shrink-0">
                        <img src={`${receita.pathImagem}`} className="rounded w-full h-full object-cover" />
                    </figure>
                    <div className="INSTRUCOES flex flex-col space-y-5">
                        <h1 className="text-2xl"><b>Modo de Preparo:</b> {receita.modoDePreparo}</h1>
                        <ul className="INGREDIENTES bg-gray-300 py-2 px-5 rounded list-inside list-disc text-2xl">
                            {receita.ingredientes.map((ingrediente) => (
                                <li className="py-2">{ingrediente.nome}: {ingrediente.quantidade}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>           
        </>
    );
}