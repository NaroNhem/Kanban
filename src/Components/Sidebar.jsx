export default function Sidebar() {
    return(
        <div className="flex bg-[#2b2c37] w-64 flex-grow p-5 pt-7 flex-col">
            {/*All Boards*/}
            <div className="text-[#828fa3] text-xs font-bold ">
                <h3 className="tracking-boardSpacing">ALL BOARDS <span>(1)</span></h3>
            </div>
            {/*Boards List*/}
            {/*Create New Board Button*/}
            <div>
                <button>
                    +Create New Board
                </button>
            </div>
            {/*Light Dark Toggle*/}
            {/*Hide Sidebar*/}
        </div>
    )
}