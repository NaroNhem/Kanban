export default function Canvas(props){
    const {editModal, setEditModal, boardList} = props
    return(
        <div className="w-full bg-[#20212c] text-white p-6">
            {/*Container that holds "Add new column" button. Will conditionally render if no columns are available. */}
            <div className="flex justify-center h-full items-center flex-col gap-4 pt-20">
                <p className="text-[#828fa3] font-bold text-lg">This board is empty. Create a new column to get started.</p>
                <button onClick={() => setEditModal(!editModal)}className="h-12 w-48 bg-white rounded-3xl text-[#635fc7] text-md font-semibold border-2 hover:border-[#635fc7] p-2">+ Add New Column</button>
            </div>
        </div>
    )
}