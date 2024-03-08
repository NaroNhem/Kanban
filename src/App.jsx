import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Canvas from "./Components/Canvas"
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <div className="flex flex-grow">
      <Sidebar />
      <Canvas />
      </div>
      
    </div>
  )
}
