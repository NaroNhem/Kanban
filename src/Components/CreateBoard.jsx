import AddInput from "./AddInput"
export default function CreateBoard() {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2b2c37] h-fit w-modal z-0 rounded-md p-9 flex flex-col">
            <h2 className="text-white font-bold text-xl">
                Add a new board
            </h2>
            <div className="text-white py-3 font-bold text-sm">
                Board Name
            </div>
            <input className="bg-[#2b2c37] border border-slate-600 rounded-sm h-8 p-5 text-white" placeholder="e.g. Web Design"/>
            {/* Board Columns */}
            <div className="flex flex-col gap-3">
                <p className="text-white font-bold text-sm mt-3 pt-3">
                    Board Columns
                </p>
                <AddInput />
                <button className="bg-white text-[#635fc7] font-bold p-2 rounded-full border-white border-2 hover:border-[#635fc7]">
                    + Add New Column
                </button>
                <button className="bg-[#635fc7] text-white font-bold p-2 rounded-full border-[#635fc7] border-2 hover:border-white">
                    Create New Board
                </button>
            </div>
        </div>
    )
}