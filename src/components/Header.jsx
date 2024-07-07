import { NavLink } from "react-router-dom";

export default function Header({title}){
  return (
    <div>
      <header className="p-5 flex justify-between bg-blue-400">
        <h1 className="text-4xl">{title}</h1>
        <form action="/action_page.php" className="flex items-center">
        <input type="search" id="site-search" name="q" placeholder="pesquisar"/>
        <button>Search</button>
        </form>
        <nav className="flex items-center">
          <ul className="flex gap-2.5 font-sans">
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/receitas">Receitas</NavLink></li>
          </ul>
        </nav>
     </header>
    </div>
  )
}