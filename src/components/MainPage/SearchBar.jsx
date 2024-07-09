import { NavLink } from "react-router-dom";

export default function SearchBar({title}){
  return (
    <>
        <form>
            <div 
            class="Search"
            className="flex 
            flex-row
            font-poppings
            p-2">
              <input 
                className="w-full 
                p-2 rounded-md ring-[1px] 
                ring-black/30 focus:pl-4 
                transition-all" 
                name="" 
                placeholder="Pesquisar Receita" />
              <button className="p-3 
                bg-slate-900
                text-slate-200
                rounded-md
                ml-3
              ">Pesquisar</button>
            </div>
        </form>
    </>
  )
}