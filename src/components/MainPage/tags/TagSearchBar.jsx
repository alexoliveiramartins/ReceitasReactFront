import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Tag(){

    const[activeButton, setActiveButton] = useState('com');

    const [tags, setTags] = useState([]);
    
    const addTags = event => {
        if(event.key === "Enter" && event.target.value !== ""){
            setTags([...tags, event.target.value])
            event.target.value = ""
        }
    };

    const removeTag = index => {
        setTags(tags.filter((_, tagIndex) => tagIndex !== index));
    }

    const a = () => {
        let stringTags = "";
        tags.forEach((tag, index) => {
            stringTags += tag;
            if(index !== tags.length - 1){
                stringTags += ",";
            }
        })
        if(activeButton === 'com') stringTags = `/receitas/search?ingredientes=` + stringTags;
        else if(activeButton === 'contem') stringTags = `/receitas/search?contemIngredientes=` + stringTags;
        console.log(stringTags);
        return stringTags;
    }


    const click = (buttonName) => {
        setActiveButton(buttonName);
    }



    return (
    <>
        <div className="flex flex-col justify-center items-center font-poppings space-y-1">
            <div className="flex flex-row space-x-3 py-2">
                <button onClick={() => click('com')}>
                    <h1 className={activeButton === 'com' ? 'underline underline-offset-8 decoration-green-800 decoration-2' : 'hover:underline underline-offset-8 decoration-green-800 decoration-2'}>Com apenas esses ingredientes</h1>
                </button>
                <h1>|</h1>
                <button onClick={() => click('contem')}>
                    <h1 className={activeButton === 'contem' ? 'underline underline-offset-8 decoration-green-800 decoration-2' : 'hover:underline underline-offset-8 decoration-green-800 decoration-2'}>Contém esses ingredientes</h1>
                </button>
            </div>
            <div className="flex flex-row w-10/12 space-x-2">
                <input 
                    type="text" 
                    placeholder="Adicione um ingrediente" 
                    onKeyUp={addTags}
                    className="px-5 bg-slate-50 shadow h-12 border-solid border-0 rounded border-2 border-white outline-transparent"
                />
                <NavLink to={a()} className="flex items-center text-slate-200 px-5 rounded hover:bg-green-700 bg-green-800">
                    Enviar
                </NavLink>
            </div>
            <ul className="flex flex-row space-x-2 py-2">
                {tags.map((tag, index) => <li key={index} className="bg-slate-50 rounded flex flex-row items-center">
                        <span>{tag}</span>
                        <button onClick={() => removeTag(index)}>
                            <img className="size-4" src="\src\imagens\xIcone.png" />
                        </button>
                    </li>)
                }
            </ul>
        </div>
    </>
    );
}