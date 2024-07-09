import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { MealMain } from "./components/MealMain";

function App() {

  return (
    <>
    <div>
      <Header title = {"RECEITAS"}/>
      <Outlet />
    </div>
    </>
  )
}

export default App