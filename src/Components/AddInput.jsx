import cross from "../assets/cross.svg"
export default function AddInput(props) {
    const {deleteColumnInput, handleColumnChange, id, index, value } = props
    return (
        <div className="flex items-center gap-3"> 
            <input type="text" onChange={(e) => handleColumnChange(e, index, id)} className="bg-[#2b2c37] border border-slate-600 rounded-sm h-8 p-5 text-white w-full"/>
            <button onClick={() => deleteColumnInput(id, index)}><img src={cross}></img></button>
        </div>
    )
}