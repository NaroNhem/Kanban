export default function CreateBoard() {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2b2c37] h-3/6 w-1/4 z-0 rounded-md p-9 flex flex-col">
            <h2 className="text-white font-bold text-xl">
                Add a new board
            </h2>
            <div className="text-white py-3 font-bold text-sm">
                Board Name
            </div>
            <input className="bg-[#2b2c37] border border-slate-600 rounded-sm h-8 p-5 text-white" placeholder="e.g. Web Design"/>
        </div>
    )
}