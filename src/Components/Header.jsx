import logo from "../assets/kanban-logo.svg"
import ellipsis from "../assets/icon-vertical-ellipsis.svg"
export default function Header() {
    return(
        <div className="bg-[#2b2c37] text-white p-4 pr-0 h-20 flex">
            {/*Logo container*/}
            <div className=" flex min-w-64 justify-start items-center">
                <img className="p-2"src={logo}></img>
                <p className="text-4xl font-semibold pl-2">kanban</p>
            </div>
            {/*Board Name container*/}
            <div className="flex w-2/6 justify-start items-center"> 
                <p className="text-2xl font-semibold pl-6">
                    Board Name
                </p>
            </div>
            {/*Add task container*/}
            <div className="flex w-2/6 items-center">
                <button className="h-12 w-40 bg-[#635fc7] rounded-3xl text-lg font-semibold border-2 border-[#635fc7] hover:border-white">+ Add Task</button>
            </div>
            {/*Add task container*/}
            <div className="flex w-1/5 items-center justify-end gap-1 pr-2">
                <button className="h-12 w-40 bg-[#635fc7] rounded-3xl text-lg font-semibold border-2 border-[#635fc7] hover:border-white">Login</button>
                <button className="px-4">
                    <img src={ellipsis}></img>
                </button>
            </div>
        </div>
    )
}