import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Canvas from "./Components/Canvas"
import CreateBoard from "./Components/CreateBoard"
import EditBoardModal from "./Components/EditBoardModal"
import { useState } from "react"
import SidebarBoardName from "./Components/SiderbarBoardName"

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [headerName, setHeaderName] = useState("")
  const [boardName, setBoardName] = useState("")
  const [boardList, setBoardList] = useState([])
  const [componentCount, setComponentCount] = useState(0)

  const onSubmitHandler = (e) => {
    if (boardName != ""){
      setBoardName(boardName)
      addBoard()
      setBoardName("")
    }else{
      alert("Please add a Board Name");
    }
    setShowModal(!showModal)
    }

  const addBoard = () => {
    const componentID = componentCount
    setBoardList(prevBoardList => [
        ...prevBoardList,
        <SidebarBoardName key={componentID} boardName={boardName} setHeaderName={setHeaderName}/>
    ])
    setComponentCount(prevCount => prevCount + 1)
}
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header boardName = {boardName}
      headerName = {headerName}/>
      <div className="flex flex-grow">
        <Sidebar 
        setShowModal = {setShowModal}
        showModal = {showModal}
        boardList = {boardList}
        headerName = {headerName}
        />
        <Canvas 
        setEditModal = {setEditModal}
        editModal = {editModal}
        boardList = {boardList}/>
      </div>
      {showModal && <CreateBoard showModal= {showModal} setShowModal = {setShowModal} setBoardName={setBoardName} onSubmitHandler={onSubmitHandler}/>}
      {editModal && <EditBoardModal editModal = {editModal} setEditModal={setEditModal}/>}
    </div>
  )
}
