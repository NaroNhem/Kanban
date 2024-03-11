import cross from "../assets/cross.svg"
export default function AddInput() {
    return (
        <div className="flex items-center gap-3"> 
            <input className="bg-[#2b2c37] border border-slate-600 rounded-sm h-8 p-5 text-white w-full"/>
            <button><img src={cross}></img></button>
        </div>
    )
}