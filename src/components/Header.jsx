import { NavLink } from "react-router-dom";

export default function Header({title}){
  return (
    <div>
      
      <header className="p-5 flex items-center justify-between bg-lime-600 border-transparent font-poppings align-middle">
        <h1 className="text-4xl"><NavLink to="/">{title}</NavLink></h1>
        <nav className="flex items-center">
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