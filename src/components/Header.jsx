import { NavLink } from "react-router-dom";

export default function Header({title}){
  return (
    <div>
      <header className="p-5 flex justify-between bg-blue-400">
        <h1 className="text-4xl">{title}</h1>
        <form action="/action_page.php">
        <input type="search" id="site-search" name="q" placeholder="pesquisar"/>
        <button>Search</button>
        </form>
        <nav>
          <ul className="flex gap-2.5">
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/products">Produtos</NavLink></li>
          </ul>
        </nav>
     </header>
    </div>
  )
}