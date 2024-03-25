import boardicon from "../assets/board-icon.svg"

export default function SidebarBoardName(props) {
    const {setHeaderName, boardName} = props
    return(
        <div className="hover:bg-white hover:rounded-r-full hover:duration-300 rounded-r-lg cursor-pointer duration-500 transition transform ">
            <button onClick={() => setHeaderName(boardName)} className="flex text-[#635fc7] font-bold items-center w-full gap-4 h-12 pl-5">
                <img src={boardicon}></img> {boardName}
            </button>
        </div>
    )
}