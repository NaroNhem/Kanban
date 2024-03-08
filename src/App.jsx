import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Canvas from "./Components/Canvas"
import CreateBoard from "./Components/CreateBoard"
import { useState } from "react"

export default function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <div className="flex flex-grow">
        <Sidebar 
        setShowModal = {setShowModal}
        showModal = {showModal}
        />
        <Canvas />
      </div>
      {showModal && <CreateBoard/>}
    </div>
  )
}
