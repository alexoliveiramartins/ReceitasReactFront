import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {

  return (
    <>
    <body className="bg-gray-200 min-h-screen space-y-5">
      <Header title = {"RECEITAS"}/>
      <Outlet />
    </body>
    </>
  )
}

export default App