import { useState, useEffect } from "react";
import { fetchRecipes } from "../../fetchRecipe";
import { useParams } from "react-router-dom";
import "./ReceitasPage.css";


export default function ReceitasPage(){
    const { nome } = useParams();
    const [receita, setReceita] = useState(null);

    const api = `http://localhost:8080/api/receitas/${nome}`
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
            <div className="flex flex-col items-center justify-center">
                
                <div className="flex flex-row items-center space-x-2 py-6">
                    <h1 className="text-4xl">{receita.nome}</h1>
                    <img className="size-9" src={`https://flagsapi.com/${receita.origem}/shiny/64.png`} />
                </div>
                
                <figure>
                    <img src={`${receita.pathImagem}`} className="" />
                </figure>
                
                <h1 className="font-light">{receita.categoria}</h1>
                <ul className="list-inside list-disc">
                    {receita.ingredientes.map((ingrediente) => (
                        <li>{ingrediente.nome}: {ingrediente.quantidade}</li>
                    ))}
                </ul>
                <h1>{receita.modoDePreparo}</h1>
            </div>
            
        </>
    );
}