import { NavLink } from "react-router-dom";
import { SearchBar } from "./MainPage/pesquisa/SearchBar";
import { SearchResultsList } from "./MainPage/pesquisa/SearchResultList";
import { useState } from "react";

export default function Header({title}){

  const [results, setResults] = useState([]);


  return (
    <div>
      
      <header className="h-20 // flex px-2 justify-start bg-green-800 font-poppings">
        <NavLink to="/" className="my-auto">
          <img src="../src/imagens/logo.png" className="size-12"/>
        </NavLink>
        <NavLink to="/" className="my-auto">
          <img src="../src/imagens/savioreceitas.png" className=""/>
        </NavLink>
        <div className="text-green-800">..................................</div>
        <div className="w-1/2 flex flex-col my-auto mt-5 origin-top place-items-end  z-10">
          <SearchBar className="" setResults={setResults}/>
          {results && results.length > 0 && <SearchResultsList className="" results={results}/>}  
        </div>

        <nav className="flex items-center p-5">
          <ul className="flex gap-2.5 font-sans text-2xl">
            <li><NavLink to="/receitas">Receitas</NavLink></li>
          </ul>
        </nav>
     </header>
    </div>
  )
}
