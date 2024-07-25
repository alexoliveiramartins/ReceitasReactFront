import { NavLink } from "react-router-dom";
import { SearchBar } from "./MainPage/SearchBar";
import { SearchResultsList } from "./MainPage/SearchResultList";
import { useState } from "react";

export default function Header({title}){

  const [results, setResults] = useState([]);


  return (
    <div>
      
      <header className="h-20 // flex px-2 justify-between bg-green-800 font-poppings">
        <NavLink to="/" className="my-auto">
          <img src="../src/imagens/logo.png" className="size-12"/>
        </NavLink>

        <div className="w-1/2 flex flex-col my-auto mt-5 origin-top place-items-end justify z-10">
          <SearchBar className="" setResults={setResults}/>
          {results && results.length > 0 && <SearchResultsList className="" results={results}/>}  
        </div>

        <nav className="flex items-center p-5">
          <ul className="flex gap-2.5 font-sans text-2xl">
            <li><NavLink to="/receitas">receitas</NavLink></li>
            <li><NavLink to="/login">login</NavLink></li>
            <li><NavLink to="/register">registro</NavLink></li>
          </ul>
        </nav>
     </header>
    </div>
  )
}