import boardicon from "../assets/board-icon.svg"
import light from "../assets/light.svg"
import dark from "../assets/dark.svg"
import hide from "../assets/hide.svg"
import unhide from "../assets/unhide.svg"
import { useState } from "react"

export default function Sidebar(props) {
    const {showModal, setShowModal} = props
    const [hidden, setHidden] = useState(false);
    return(
        !hidden ? 
            <div className="hidden md:flex bg-[#2b2c37] min-w-64 flex-grow pt-3 pr-5 flex-col justify-between">
            <div>
                <div className="text-[#828fa3] text-xs font-bold p-5">
                    <h3 className="tracking-boardSpacing">ALL BOARDS <span>(1)</span></h3>
                </div>
                {/*Boards List*/}
                {/*Create New Board Button*/}
                <div className="hover:bg-white hover:rounded-r-full hover:duration-300 rounded-r-lg cursor-pointer duration-500 transition transform ">
                    <button onClick={() => setShowModal(!showModal)} className="flex text-[#635fc7] font-bold items-center w-full gap-4 h-12 pl-5">
                        <img src={boardicon}></img>+ Create New Board
                    </button>
                </div>
            </div>
            {/*All Boards*/}
            <div className="pb-4 gap-2">
                {/*Light Dark Toggle*/}
                <div className="flex justify-evenly bg-[#20212c] p-3 rounded-md items-center ml-3 ">
                    <img src={light} className="pt-1"></img>
                    <label><input type="checkbox" /></label>
                    <img src={dark} className="pt-1"></img>
                </div>
                {/*Hide Sidebar*/}
                <div className="hover:bg-white hover:rounded-r-full hover:duration-300 rounded-r-lg cursor-pointer duration-500 transition transform">
                    <button onClick={() => setHidden(!hidden)} className="flex text-[#828fa3] font-bold items-center w-full gap-4 h-12 pl-5">
                        <img src={hide}></img>Hide Sidebar
                    </button>
                </div>
            </div>
        </div>
    :   
        <button onClick={() => setHidden(!hidden)} className="flex self-end bg-[#2b2c37] fixed p-5 bottom-8 rounded-r-full hover:bg-[#635fc7]">
            <img src={unhide}></img>
        </button>
    )
}