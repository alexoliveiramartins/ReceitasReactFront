import { NavLink } from "react-router-dom";

export default function Header({title}){
  return (
    <div>
      
      <header className="flex px-2 items-center justify-between bg-green-800 font-poppings">
        <NavLink to="/">
          <img src="../src/imagens/logo.png" className="size-12"/>
        </NavLink>
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