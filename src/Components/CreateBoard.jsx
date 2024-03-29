import AddInput from "./AddInput"
import { useState } from "react"

export default function CreateBoard(props) {
    const {showModal, setShowModal, setBoardName, onSubmitHandler, handleColumnChange, setColumnName,  addBoardData} = props
    const [inputComponent, setInputComponent] = useState([])
    const [componentCount, setComponentCount] = useState(0)
    
    {/*Function to delete component */}
    const deleteColumnInput = (id) => {
        setInputComponent(prevInputComponent => (
            prevInputComponent.filter(component => component.props.id !== id)
        ));
        setColumnName(prevColumnName => (
            prevColumnName.filter(obj => obj.id !== id)
        ));
    }
    
    
    {/*Function to add component */}
    const addColumnInput = () => {
        const componentID = componentCount
        setInputComponent(prevInputComponent => [
            ...prevInputComponent,
            <AddInput key={componentID} id={componentID} index={prevInputComponent.length} deleteColumnInput={deleteColumnInput} handleColumnChange={handleColumnChange} value={componentID}/>
        ])
        setColumnName(prevNames => [...prevNames, ''])
        setComponentCount(prevCount => prevCount + 1)
    }
    
    return (
        <div>
            <div onClick={() => setShowModal(!showModal)}className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2b2c37] h-fit w-modal z-20 rounded-md p-9 flex flex-col">
                <h2 className="text-white font-bold text-xl">
                    Add a new board
                </h2>
                <div className="text-white py-3 font-bold text-sm">
                    Board Name
                </div>
                <input type="text" onChange={(e) => setBoardName(e.target.value)} className="bg-[#2b2c37] border border-slate-600 rounded-sm h-8 p-5 text-white" placeholder="e.g. Web Design"/>
                {/* Board Columns */}
                <div className="flex flex-col gap-3">
                    <p className="text-white font-bold text-sm mt-3 pt-3">
                        Board Columns
                    </p>
                    {inputComponent.map(inputComponent => inputComponent)}
                    
                    <button onClick={addColumnInput}className="bg-white text-[#635fc7] font-bold p-2 rounded-full border-white border-2 hover:border-[#635fc7]">
                        + Add New Column
                    </button>
                    <button onClick={e=> onSubmitHandler(e)}className="bg-[#635fc7] text-white font-bold p-2 rounded-full border-[#635fc7] border-2 hover:border-white">
                        Create New Board
                    </button>
                </div>
            </div>
        </div>
    )
}