import boardicon from "../assets/board-icon.svg"

export default function Sidebar() {
    return(
        <div className="flex bg-[#2b2c37] w-64 flex-grow pt-3 pr-5 flex-col">
            {/*All Boards*/}
            <div className="text-[#828fa3] text-xs font-bold p-5">
                <h3 className="tracking-boardSpacing">ALL BOARDS <span>(1)</span></h3>
            </div>
            {/*Boards List*/}
            {/*Create New Board Button*/}
            <div className="hover:bg-white hover:rounded-r-full hover:duration-300 rounded-r-lg cursor-pointer duration-500 transition transform ">
                <button className="flex text-[#635fc7] font-bold items-center w-full gap-4 h-12 pl-5">
                    <img src={boardicon}></img>+ Create New Board
                </button>
            </div>
            {/*Light Dark Toggle*/}
            {/*Hide Sidebar*/}
        </div>
    )
}