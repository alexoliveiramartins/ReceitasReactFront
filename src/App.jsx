import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { MealMain } from "./components/Receitas/ReceitasMain";

function App() {

  return (
    <>
    <body className="bg-zinc-200">
      <Header title = {"RECEITAS"}/>
      <Outlet />
    </body>
    </>
  )
}

export default App