import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { Product } from "./components/Product"

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
